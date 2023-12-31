import { ContextualKeyword } from "../tokenizer/keywords";
import { type StopState } from "../traverser/expression";
export declare function flowParseTypeParameterDeclaration(): void;
export declare function flowParseTypeAnnotation(): void;
export declare function flowParseVariance(): void;
export declare function flowParseFunctionBodyAndFinish(funcContextId: number): void;
export declare function flowParseSubscript(startTokenIndex: number, noCalls: boolean, stopState: StopState): void;
export declare function flowStartParseNewArguments(): void;
export declare function flowTryParseStatement(): boolean;
export declare function flowTryParseExportDefaultExpression(): boolean;
export declare function flowParseIdentifierStatement(contextualKeyword: ContextualKeyword): void;
export declare function flowShouldParseExportDeclaration(): boolean;
export declare function flowShouldDisallowExportDefaultSpecifier(): boolean;
export declare function flowParseExportDeclaration(): void;
export declare function flowShouldParseExportStar(): boolean;
export declare function flowParseExportStar(): void;
export declare function flowAfterParseClassSuper(hasSuper: boolean): void;
export declare function flowStartParseObjPropValue(): void;
export declare function flowParseAssignableListItemTypes(): void;
export declare function flowStartParseImportSpecifiers(): void;
export declare function flowParseImportSpecifier(): void;
export declare function flowStartParseFunctionParams(): void;
export declare function flowAfterParseVarHead(): void;
export declare function flowStartParseAsyncArrowFromCallExpression(): void;
export declare function flowParseMaybeAssign(noIn: boolean, isWithinParens: boolean): boolean;
export declare function flowParseArrow(): boolean;
export declare function flowParseSubscripts(startTokenIndex: number, noCalls?: boolean): void;
