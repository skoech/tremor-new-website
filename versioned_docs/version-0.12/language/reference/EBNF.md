## EBNF Grammar

This EBNF grammar was generated from: "/home/heinz/tremor-www/tremor-runtime/tremor-script/src/grammar.lalrpop"

```ebnf


rule ModuleFile ::=
    ModuleBody 
  ;

rule ModuleBody ::=
    ( ModComment ) ?  ModuleStmts 
  ;

rule ModComment ::=
     '<mod-comment>' 
  | ModComment  '<mod-comment>' 
  ;

rule DocComment ::=
     '<doc-comment>' 
  | DocComment  '<doc-comment>' 
  ;

rule ModuleStmts ::=
    ModuleStmt  ';' ModuleStmts 
  | ModuleStmt  ';' ?  
  ;

rule ModuleStmt ::=
    Use 
  | Const 
  | FnDefn 
  | Intrinsic 
  | DefineWindow 
  | DefineOperator 
  | DefineScript 
  | DefinePipeline 
  | DefineConnector 
  | DefineFlow 
  ;

rule ConfigDirectives ::=
    ConfigDirective ConfigDirectives 
  | ConfigDirective 
  ;

rule ConfigDirective ::=
     '#!config' WithExpr 
  ;

rule Use ::=
     'use' ModularTarget 
  |  'use' ModularTarget  'as' Ident 
  ;

rule ArgsWithEnd ::=
    ArgsClause ?  WithEndClause 
  | 
  ;

rule DefinitionArgs ::=
    ArgsClause ?  
  ;

rule ArgsClause ::=
     'args' ArgsExprs 
  ;

rule ArgsExprs ::=
    Sep!(ArgsExprs, ArgsExpr, ",") 
  ;

rule ArgsExpr ::=
    Ident  '=' ExprImut 
  | Ident 
  ;

rule CreationWithEnd ::=
    WithEndClause 
  | 
  ;

rule CreationWith ::=
    WithClause 
  | 
  ;

rule WithClause ::=
     'with' WithExprs 
  ;

rule WithEndClause ::=
    WithClause  'end' 
  ;

rule WithExprs ::=
    Sep!(WithExprs, WithExpr, ",") 
  ;

rule WithExpr ::=
    Ident  '=' ExprImut 
  ;

rule ModularTarget ::=
    Ident 
  | ModPath  '::' Ident 
  ;

rule Deploy ::=
    ConfigDirectives ( ModComment ) ?  DeployStmts 
  | ( ModComment ) ?  DeployStmts 
  ;

rule DeployStmts ::=
    DeployStmt  ';' DeployStmts 
  | DeployStmt  ';' ?  
  ;

rule DeployStmt ::=
    DefineFlow 
  | DeployFlowStmt 
  | Use 
  ;

rule DeployFlowStmt ::=
    ( DocComment ) ?   'deploy'  'flow' Ident  'from' ModularTarget CreationWithEnd 
  | ( DocComment ) ?   'deploy'  'flow' Ident CreationWithEnd 
  ;

rule ConnectorKind ::=
    Ident 
  ;

rule FlowStmts ::=
    FlowStmts_ 
  ;

rule FlowStmts_ ::=
    Sep!(FlowStmts_, FlowStmtInner, ";") 
  ;

rule CreateKind ::=
     'connector' 
  |  'pipeline' 
  ;

rule FlowStmtInner ::=
    Define 
  | Create 
  | Connect 
  | Use 
  ;

rule Define ::=
    DefinePipeline 
  | DefineConnector 
  ;

rule Create ::=
     'create' CreateKind Ident  'from' ModularTarget CreationWithEnd 
  |  'create' CreateKind Ident CreationWithEnd 
  ;

rule Connect ::=
     'connect'  '/' ConnectFromConnector  'to'  '/' ConnectToPipeline 
  |  'connect'  '/' ConnectFromPipeline  'to'  '/' ConnectToConnector 
  |  'connect'  '/' ConnectFromPipeline  'to'  '/' ConnectToPipeline 
  ;

rule ConnectFromConnector ::=
     'connector'  '/' Ident MaybePort 
  ;

rule ConnectFromPipeline ::=
     'pipeline'  '/' Ident MaybePort 
  ;

rule ConnectToPipeline ::=
     'pipeline'  '/' Ident MaybePort 
  ;

rule ConnectToConnector ::=
     'connector'  '/' Ident MaybePort 
  ;

rule DefineConnector ::=
    ( DocComment ) ?   'define'  'connector' Ident  'from' ConnectorKind ArgsWithEnd 
  ;

rule DefineFlow ::=
    ( DocComment ) ?   'define'  'flow' Ident DefinitionArgs  'flow' FlowStmts  'end' 
  ;

rule Query ::=
    ConfigDirectives Stmts 
  | Stmts 
  ;

rule Stmts ::=
    Stmt  ';' Stmts 
  | Stmt  ';' ?  
  ;

rule Stmt ::=
    Use 
  | DefineWindow 
  | DefineOperator 
  | DefineScript 
  | DefinePipeline 
  | CreateOperator 
  | CreateScript 
  | CreatePipeline 
  | CreateStream 
  | OperatorSelect 
  ;

rule DefineWindow ::=
    ( DocComment ) ?   'define'  'window' Ident  'from' WindowKind CreationWith ( EmbeddedScriptImut ) ?   'end' 
  ;

rule DefineOperator ::=
    ( DocComment ) ?   'define'  'operator' Ident  'from' OperatorKind ArgsWithEnd 
  ;

rule DefineScript ::=
    ( DocComment ) ?   'define'  'script' Ident DefinitionArgs EmbeddedScript 
  ;

rule DefinePipeline ::=
    ( DocComment ) ?   'define'  'pipeline' Ident (  'from' Ports ) ?  (  'into' Ports ) ?  DefinitionArgs Pipeline 
  ;

rule OperatorSelect ::=
     'select' ComplexExprImut  'from' StreamPort ( WindowClause ) ?  ( WhereClause ) ?  ( GroupByClause ) ?   'into' StreamPort ( HavingClause ) ?  
  ;

rule CreateStream ::=
     'create'  'stream' Ident 
  ;

rule CreateScript ::=
     'create'  'script' Ident CreationWithEnd 
  |  'create'  'script' Ident  'from' ModularTarget CreationWithEnd 
  ;

rule CreateOperator ::=
     'create'  'operator' Ident CreationWithEnd 
  |  'create'  'operator' Ident  'from' ModularTarget CreationWithEnd 
  ;

rule CreatePipeline ::=
     'create'  'pipeline' Ident CreationWithEnd 
  |  'create'  'pipeline' Ident  'from' ModularTarget CreationWithEnd 
  ;

rule MaybePort ::=
    (  '/' Ident ) ?  
  ;

rule StreamPort ::=
    Ident MaybePort 
  ;

rule WindowKind ::=
     'sliding' 
  |  'tumbling' 
  ;

rule WindowClause ::=
    WindowDefn 
  ;

rule Windows ::=
    Windows_ 
  ;

rule Windows_ ::=
    Sep!(Windows_, Window, ",") 
  ;

rule Window ::=
    ModularTarget 
  ;

rule WindowDefn ::=
     '[' Windows  ']' 
  ;

rule WhereClause ::=
     'where' ComplexExprImut 
  ;

rule HavingClause ::=
     'having' ComplexExprImut 
  ;

rule GroupByClause ::=
     'group'  'by' GroupDef 
  ;

rule GroupDef ::=
    ExprImut 
  |  'set'  '(' GroupDefs  ')' 
  |  'each'  '(' ExprImut  ')' 
  ;

rule GroupDefs ::=
    GroupDefs_ 
  ;

rule GroupDefs_ ::=
    Sep!(GroupDefs_, GroupDef, ",") 
  ;

rule EmbeddedScriptImut ::=
     'script' EmbeddedScriptContent 
  ;

rule EmbeddedScriptContent ::=
    ExprImut 
  ;

rule Ports ::=
    Sep!(Ports, <Ident>, ",") 
  ;

rule OperatorKind ::=
    Ident  '::' Ident 
  ;

rule EmbeddedScript ::=
     'script' TopLevelExprs  'end' 
  ;

rule Pipeline ::=
     'pipeline' ConfigDirectives ?  PipelineCreateInner  'end' 
  ;

rule PipelineCreateInner ::=
    Stmt  ';' Stmts 
  | Stmt  ';' ?  
  ;

rule Script ::=
    ( ModComment ) ?  TopLevelExprs 
  ;

rule TopLevelExprs ::=
    TopLevelExpr  ';' TopLevelExprs 
  | TopLevelExpr  ';' ?  
  ;

rule InnerExprs ::=
    Expr  ';' InnerExprs 
  | Expr  ';' ?  
  ;

rule TopLevelExpr ::=
    Const 
  | FnDefn 
  | Intrinsic 
  | Expr 
  | Use 
  ;

rule Const ::=
    ( DocComment ) ?   'const' Ident  '=' ComplexExprImut 
  ;

rule Expr ::=
    SimpleExpr 
  ;

rule SimpleExpr ::=
    Match 
  | For 
  | Let 
  | Drop 
  | Emit 
  | ExprImut 
  ;

rule AlwaysImutExpr ::=
    Patch 
  | Merge 
  | Invoke 
  | Literal 
  | Path 
  | Record 
  | List 
  | StringLiteral 
  | BytesLiteral 
  | Recur 
  ;

rule Recur ::=
     'recur'  '('  ')' 
  |  'recur'  '(' InvokeArgs  ')' 
  ;

rule ExprImut ::=
    OrExprImut 
  ;

rule OrExprImut ::=
    BinOp!(BinOr, ExprImut, XorExprImut) 
  | XorExprImut 
  ;

rule XorExprImut ::=
    BinOp!(BinXor, XorExprImut, AndExprImut) 
  | AndExprImut 
  ;

rule AndExprImut ::=
    BinOp!(BinAnd, AndExprImut, BitOrExprImut) 
  | BitOrExprImut 
  ;

rule BitOrExprImut ::=
    BitXorExprImut 
  ;

rule BitXorExprImut ::=
    BinOp!(BinBitXor, BitXorExprImut, BitAndExprImut) 
  | BitAndExprImut 
  ;

rule BitAndExprImut ::=
    BinOp!(BinBitAnd, BitAndExprImut, EqExprImut) 
  | EqExprImut 
  ;

rule EqExprImut ::=
    BinOp!(BinEq, EqExprImut, CmpExprImut) 
  | CmpExprImut 
  ;

rule CmpExprImut ::=
    BinOp!(BinCmp, CmpExprImut, BitShiftExprImut) 
  | BitShiftExprImut 
  ;

rule BitShiftExprImut ::=
    BinOp!(BinBitShift, BitShiftExprImut, AddExprImut) 
  | AddExprImut 
  ;

rule AddExprImut ::=
    BinOp!(BinAdd, AddExprImut, MulExprImut) 
  | MulExprImut 
  ;

rule MulExprImut ::=
    BinOp!(BinMul, MulExprImut, UnaryExprImut) 
  | UnaryExprImut 
  ;

rule UnaryExprImut ::=
     '+' UnaryExprImut 
  |  '-' UnaryExprImut 
  | UnarySimpleExprImut 
  ;

rule UnarySimpleExprImut ::=
     'not' UnarySimpleExprImut 
  |  '!' UnarySimpleExprImut 
  | PresenceSimplExprImut 
  ;

rule PresenceSimplExprImut ::=
     'present' Path 
  |  'absent' Path 
  | SimpleExprImut 
  ;

rule ComplexExprImut ::=
    MatchImut 
  | ForImut 
  | ExprImut 
  ;

rule Intrinsic ::=
    ( DocComment ) ?   'intrinsic'  'fn' Ident  '('  ')'  'as' ModularTarget 
  | ( DocComment ) ?   'intrinsic'  'fn' Ident  '(' FnArgs  ')'  'as' ModularTarget 
  | ( DocComment ) ?   'intrinsic'  'fn' Ident  '(' FnArgs  ','  '.'  '.'  '.'  ')'  'as' ModularTarget 
  | ( DocComment ) ?   'intrinsic'  'fn' Ident  '('  '.'  '.'  '.'  ')'  'as' ModularTarget 
  ;

rule FnDefn ::=
    ( DocComment ) ?   'fn' Ident  '('  '.'  '.'  '.'  ')'  'with' InnerExprs  'end' 
  | ( DocComment ) ?   'fn' Ident  '(' FnArgs  ','  '.'  '.'  '.'  ')'  'with' InnerExprs  'end' 
  | ( DocComment ) ?   'fn' Ident  '('  ')'  'with' InnerExprs  'end' 
  | ( DocComment ) ?   'fn' Ident  '(' FnArgs  ')'  'with' InnerExprs  'end' 
  | ( DocComment ) ?   'fn' Ident  '('  ')'  'of' FnCases  'end' 
  | ( DocComment ) ?   'fn' Ident  '(' FnArgs  ')'  'of' FnCases  'end' 
  ;

rule FnCases ::=
    FnCaseClauses FnCaseDefault 
  | FnCaseDefault 
  ;

rule FnCaseDefault ::=
     'default' Effectors 
  ;

rule FnCase ::=
     'case'  '(' ArrayPredicatePatterns  ')' WhenClause Effectors 
  ;

rule FnCaseClauses ::=
    FnCase 
  | FnCaseClauses FnCase 
  ;

rule FnArgs ::=
    Ident 
  | FnArgs  ',' Ident 
  ;

rule SimpleExprImut ::=
     '(' ComplexExprImut  ')' 
  | AlwaysImutExpr 
  ;

rule Literal ::=
    Nil 
  | Bool 
  | Int 
  | Float 
  ;

rule Nil ::=
     'nil' 
  ;

rule Bool ::=
     'bool' 
  ;

rule Int ::=
     'int' 
  ;

rule Float ::=
     'float' 
  ;

rule StringLiteral ::=
     'heredoc_start' StrLitElements  'heredoc_end' 
  |  '\\' StrLitElements  '\\' 
  |  '\\'  '\\' 
  ;

rule StrLitElements ::=
    StringPart StrLitElements 
  |  '\\\\#' StrLitElements 
  |  '#{' ExprImut  '}' StrLitElements 
  | StringPart 
  |  '\\\\#' 
  |  '#{' ExprImut  '}' 
  ;

rule StringPart ::=
     'string' 
  |  'heredoc' 
  ;

rule List ::=
     '[' ListElements  ']' 
  |  '['  ']' 
  ;

rule ListElements ::=
    ListElements_ 
  ;

rule ListElements_ ::=
    Sep!(ListElements_, ComplexExprImut, ",") 
  ;

rule Record ::=
     '{' Fields  '}' 
  |  '{'  '}' 
  ;

rule Field ::=
    StringLiteral  ':' ComplexExprImut 
  ;

rule Path ::=
    MetaPath 
  | EventPath 
  | StatePath 
  | LocalPath 
  | ConstPath 
  | AggrPath 
  | ArgsPath 
  | ExprPath 
  ;

rule ExprPathRoot ::=
     '(' ComplexExprImut  ')' 
  | Invoke 
  | Record 
  | List 
  ;

rule ExprPath ::=
    ExprPathRoot PathSegments 
  ;

rule MetaPath ::=
     '$' Ident PathSegments 
  |  '$' Ident 
  |  '$' 
  ;

rule AggrPath ::=
     'group' PathSegments 
  |  'group' 
  |  'window' PathSegments 
  |  'window' 
  ;

rule ArgsPath ::=
     'args' PathSegments 
  |  'args' 
  ;

rule LocalPath ::=
    Ident PathSegments 
  | Ident 
  ;

rule ConstPath ::=
    ModPath  '::' LocalPath 
  ;

rule StatePath ::=
     'state' PathSegments 
  |  'state' 
  ;

rule EventPath ::=
     'event' PathSegments 
  |  'event' 
  ;

rule PathSegments ::=
     '.' Ident PathSegments 
  |  '[' Selector  ']' PathSegments 
  |  '[' Selector  ']' 
  |  '.' Ident 
  ;

rule Selector ::=
    ComplexExprImut  ':' ComplexExprImut 
  | ComplexExprImut 
  ;

rule Invoke ::=
    FunctionName  '(' InvokeArgs  ')' 
  | FunctionName  '('  ')' 
  ;

rule FunctionName ::=
    Ident 
  | ModPath  '::' Ident 
  ;

rule ModPath ::=
    ModPath  '::' Ident 
  | Ident 
  ;

rule InvokeArgs ::=
    InvokeArgs_ 
  ;

rule InvokeArgs_ ::=
    Sep!(InvokeArgs_, ComplexExprImut, ",") 
  ;

rule Drop ::=
     'drop' 
  ;

rule Emit ::=
     'emit' ComplexExprImut  '=>' StringLiteral 
  |  'emit' ComplexExprImut 
  |  'emit'  '=>' StringLiteral 
  |  'emit' 
  ;

rule Let ::=
     'let' Assignment 
  ;

rule Assignment ::=
    Path  '=' SimpleExpr 
  ;

rule Patch ::=
     'patch' ComplexExprImut  'of' PatchOperations  'end' 
  ;

rule PatchOperations ::=
    PatchOperationClause 
  | PatchOperations  ';' PatchOperationClause 
  ;

rule PatchField ::=
    StringLiteral 
  ;

rule PatchOperationClause ::=
     'insert' PatchField  '=>' ComplexExprImut 
  |  'upsert' PatchField  '=>' ComplexExprImut 
  |  'update' PatchField  '=>' ComplexExprImut 
  |  'erase' PatchField 
  |  'move' PatchField  '=>' PatchField 
  |  'copy' PatchField  '=>' PatchField 
  |  'merge' PatchField  '=>' ComplexExprImut 
  |  'merge'  '=>' ComplexExprImut 
  |  'default' PatchField  '=>' ComplexExprImut 
  |  'default'  '=>' ComplexExprImut 
  ;

rule Merge ::=
     'merge' ComplexExprImut  'of' ComplexExprImut  'end' 
  ;

rule For ::=
     'for' ComplexExprImut  'of' ForCaseClauses  'end' 
  ;

rule ForCaseClauses ::=
    ForCaseClause 
  | ForCaseClauses ForCaseClause 
  ;

rule ForCaseClause ::=
     'case'  '(' Ident  ',' Ident  ')' WhenClause Effectors 
  ;

rule ForImut ::=
     'for' ComplexExprImut  'of' ForCaseClausesImut  'end' 
  ;

rule ForCaseClausesImut ::=
    ForCaseClauseImut 
  | ForCaseClausesImut ForCaseClauseImut 
  ;

rule ForCaseClauseImut ::=
     'case'  '(' Ident  ',' Ident  ')' WhenClause EffectorsImut 
  ;

rule Match ::=
     'match' ComplexExprImut  'of' Predicates  'end' 
  ;

rule Predicates ::=
    PredicateClause 
  | Predicates PredicateClause 
  ;

rule PredicateClause ::=
     'case' CasePattern WhenClause Effectors 
  |  'default' Effectors 
  ;

rule Effectors ::=
     '=>' Block 
  ;

rule Block ::=
    Expr 
  | Block  ';' Expr 
  ;

rule MatchImut ::=
     'match' ComplexExprImut  'of' PredicatesImut  'end' 
  ;

rule PredicatesImut ::=
    PredicateClauseImut 
  | PredicatesImut PredicateClauseImut 
  ;

rule CasePattern ::=
    RecordPattern 
  | ArrayPattern 
  | TuplePattern 
  | ComplexExprImut 
  |  '_' 
  |  '~' TestExpr 
  | Ident  '=' CasePattern 
  ;

rule PredicateClauseImut ::=
     'case' CasePattern WhenClause EffectorsImut 
  |  'default' EffectorsImut 
  ;

rule EffectorsImut ::=
     '=>' BlockImut 
  ;

rule BlockImut ::=
    ComplexExprImut 
  | BlockImut  ',' ComplexExprImut 
  ;

rule WhenClause ::=
    (  'when' ComplexExprImut ) ?  
  ;

rule PredicateFieldPattern ::=
    Ident  '~=' TestExpr 
  | Ident  '=' Ident  '~=' TestExpr 
  | Ident  '~=' RecordPattern 
  | Ident  '~=' ArrayPattern 
  | Ident  '~=' TuplePattern 
  |  'present' Ident 
  |  'absent' Ident 
  | Ident BinCmpEq ComplexExprImut 
  ;

rule TestExpr ::=
    Ident TestLiteral 
  ;

rule RecordPattern ::=
     '%{' PatternFields  '}' 
  |  '%{'  '}' 
  ;

rule ArrayPattern ::=
     '%[' ArrayPredicatePatterns  ']' 
  |  '%['  ']' 
  ;

rule TuplePattern ::=
     '%(' TuplePredicatePatterns OpenTuple  ')' 
  |  '%('  ')' 
  |  '%('  '.'  '.'  '.'  ')' 
  ;

rule OpenTuple ::=
    (  ','  '.'  '.'  '.' ) ?  
  ;

rule TuplePredicatePatterns ::=
    TuplePredicatePatterns  ',' TuplePredicatePattern 
  | TuplePredicatePattern 
  ;

rule TuplePredicatePattern ::=
    ArrayPredicatePattern 
  ;

rule ArrayPredicatePattern ::=
     '~' TestExpr 
  |  '_' 
  | ComplexExprImut 
  | RecordPattern 
  ;

rule ArrayPredicatePatterns ::=
    ArrayPredicatePatterns  ',' ArrayPredicatePattern 
  | ArrayPredicatePattern 
  ;

rule PatternFields ::=
    PatternFields_ 
  ;

rule PatternFields_ ::=
    Sep!(PatternFields_, PredicateFieldPattern, ",") 
  ;

rule Fields ::=
    Fields_ 
  ;

rule Fields_ ::=
    Sep!(Fields_, Field, ",") 
  ;

rule Ident ::=
     '<ident>' 
  ;

rule TestLiteral ::=
     '<extractor>' 
  ;

rule BytesLiteral ::=
     '<<'  '>>' 
  |  '<<' Bytes  '>>' 
  ;

rule Bytes ::=
    BytesPart 
  | Bytes  ',' BytesPart 
  ;

rule BytesPart ::=
    SimpleExprImut 
  | SimpleExprImut  ':'  'int' 
  | SimpleExprImut  '/' Ident 
  | SimpleExprImut  ':'  'int'  '/' Ident 
  ;

macro Sep<L, T, D> ::=
    T D L 
  | T D ?  
  ;

macro BinOp<Op, Current, Next> ::=
    ( Current ) ( Op ) Next 
  ;

rule BinCmpEq ::=
    BinEq 
  | BinCmp 
  ;

rule BinOr ::=
     'or' 
  ;

rule BinXor ::=
     'xor' 
  ;

rule BinAnd ::=
     'and' 
  ;

rule BinBitXor ::=
     '^' 
  ;

rule BinBitAnd ::=
     '&' 
  ;

rule BinEq ::=
     '==' 
  |  '!=' 
  ;

rule BinCmp ::=
     '>=' 
  |  '>' 
  |  '<=' 
  |  '<' 
  ;

rule BinBitShift ::=
     '>>' 
  |  '>>>' 
  |  '<<' 
  ;

rule BinAdd ::=
     '+' 
  |  '-' 
  ;

rule BinMul ::=
     '*' 
  |  '/' 
  |  '%' 
  ;

```

