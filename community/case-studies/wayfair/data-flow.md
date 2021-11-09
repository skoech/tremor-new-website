# Data Flow with Tremor

## Happened Before

Traffic Shaping with Tremor - our origin story.

Data Distribution with Tremor - event processing origins.  
  
The simplified architecture of our systems is currently:  
  
<img src="./media/data-flow/image1.png"/>


## Identified Need

The need to route and process data from multiple sources to multiple
destinations with one or many potentially overlapping streams of data
processing is already evident in the first 2 phases of Tremor’s
emergence as a mission critical piece of infrastructure at Wayfair.

Growing adoption and the increased sophistication of processing needs
now results in the emergence of event/data flow or pipeline processing
by our production users. We summarise multiple phases of evolution here
and conflate them into a single case study.  
  
In reality the use case captured in this synopsis composes multiple
smaller projects related by the same identified need spanning multiple
releases into a single case study.

## Required Outcome

Our systems specialists are writing increasingly complex, layered and
rich business logic within tremor’s domain specific language
\`tremor-script\` and are inhibited by our pipeline model which uses the
YAML format for describing data flow graphs.

YAML is hard to write, and hard to debug, and the embedded scripting
language is an odd fit into the pipeline configuration which is
described in YAML.

Preserving the internal pipeline processing and execution mechanisms -
replace the verbose YAML syntax with a statement oriented query language
that extends the expression oriented scripting language.  
  
This allows hygienic and helpful error reporting with suggested
workarounds and fixes, better IDE integration and a more intuitive means
to express data flow operations on multiple data streams that the
pipeline mechanisms expose to tremor systems application developers.  
  
A structured query-like language suitably captures the directed-acyclic
graph nature of data flows but we need to support rich nested JSON-like
data structures with leverage of the processing capabilities of the
scripting language - whilst opening up new capabilities to extend the
processing capabilities through custom operators, embeddable scripting
logic and extensions and enhancements to QoS and non-functional
primitives.

For the metrics domain - the ability to aggregate tumbling windows of
events and to provide multiple aggregation dimensions with flexible
grouping policies is a new requirement.

### Characteristics

Replace the YAML-based pipeline configuration with a structured
query-like language that embeds the scripting language, providing top
grade support for processing rich data structures, extensibility through
custom operators, and windowing semantics to support multi-resolution
event aggregation.

The initial solution was the introduction of the tremor query language.

### Solution

The query language not only replaces the YAML-based event flow syntax
for describing data flow pipelines and processing - which is useful for
every domain using tremor in production at Wayfair - but, it has special
considerations for the metrics or other analytic domains that require
rich means of grouping and aggregate processing of in-flight streaming
data. The embedding of scripting logic allows the traditional domain of
ETL and data processing and transformation to be natively supported with
a more intuitive syntax.

A rate limiting or traffic shaping example ( common to multiple usage
domains ):

```trickle
# File traffic.trickle
# Very basic traffic shaping algorithm

# Define a bucket grouping operator
define grouper::bucket operator kfc;

# Logic for categorizing events

define script categorize
script
  let $rate = 1;
  let $class = event.`group`;
  { "event": event, "rate": $rate, "class": $class };
end;

# An instance of the grouper
create operator kfc from kfc;

# An instance of the categorizer
create script categorize;

# Stream ingested events into the categorizer
select event from in into categorize;

# Stream categorized events into the grouper
select event from categorize into kfc;

# Stream categorized and group batched events downstream
select event from kfc into out;
```

The relatively simple structured query-like language allows script and
window definitions to be reused. The \`define\` statements do not create
operator instances in the data flow graph; they create named reusable
definitions that encompass the desired semantics. The \`create\`
statements create the nodes of the directed acyclic graph. The
\`select\` statement is a builtin operator that is used for linking
nodes in the graph together to form a data flow or event processing
graph.

Although the sample logic in the example is a simplified version of what
our logging and metrics service teams actually develop and maintain for
our production systems - it replaces 1000s of lines of cryptic YAML with
hundreds of lines of easy to debug and reason about query code.

An aggregation example from the metrics or analytics domain. This example
is a complete but simplified example of a tremor event processing application:  

```trickle  
​*# File: aggregator.trickle
# Aggregate events using a high dynamic range histogram with 10 second, 1 minute, 10 minute
# and 1 hour aggregate summaries.*

select {
  "measurement": event.measurement,
  "tags": patch
    event.tags of insert "window" => window 
  end,
  # Windowed histogram - for median and a selection of quartiles
  "stats": aggr::stats::hdr(event.fields[group[2]], [ "0.5","0.9", "0.99", "0.999" ]),
  "class": group[2],
  "timestamp": aggr::win::first(event.timestamp),
}
# The higher resolution aggregates are merged into lower resolution aggregates to conserve memory
from in[`10secs`, `1min`, `10min`, `1h`]
where event.measurement == "udp_lb"
or event.measurement == "kafka-proxy.endpoints"
or event.measurement == "burrow_group"
or event.measurement == "burrow_partition"
or event.measurement == "burrow_topic"
# The operator maintains a user defined composited set of group partitions.
# Each group maintains its own set of aggregation windows
group by set(event.measurement, event.tags,
each(record::keys(event.fields)))
into normalize
*# Discard computed events with a small sample set*
having event.stats.count \> 100;
```

In most real world tremor-based systems - the synthetic events computed
in processing pipelines are tailored to conform to the schemas expected
by multiple downstream systems:  

```trickle  
# File: normalize.trickle
# Prepare computed histogram summaries for downstream systems ( eg: telegraf/influx )
select {
  "measurement": event.measurement,
  "tags": event.tags,
  "fields": {
    "count_#{event.class}": event.stats.count,
    "min_#{event.class}": event.stats.min,
    "max_#{event.class}": event.stats.max,
    "mean_#{event.class}": event.stats.mean,
    "stdev_#{event.class}": event.stats.stdev,
    "var_#{event.class}": event.stats.var,
    "p42_#{event.class}": event.stats.percentiles["0.42"],
    "p50_#{event.class}": event.stats.percentiles["0.5"],
    "p90_#{event.class}": event.stats.percentiles["0.9"],
    "p99_#{event.class}": event.stats.percentiles["0.99"],
    "p99.9_#{event.class}": event.stats.percentiles["0.999"]
  }
}
from normalize
into out;
```

Compared to the disparate services and software elements that tremor
replaces - the query language affords an intuitive and easy to reason
about high level domain specific language to configure rich event
processing and data enrichment and transformation pipelines - with a
minimally terse yet easy to read form.

## Conclusion

Tremor’s core mission and mandate includes the efficient declaration of
arbitrarily complex directed-acyclic pipeline processing graphs that are
memory and compute efficient under the hood whilst preserving
transparency or remaining \`hidden\` to most of the developers in our
organization by continuing to conform to external transports, protocols
and service interfaces in the surrounding production infrastructure
estate.
