import { multipliers, numbers, units } from "../src/constants";
declare module "timeproxy" {
  type ValidNumber = keyof typeof numbers | number;
  type ValidMultiplier = keyof typeof multipliers;
  type ValidUnit = keyof typeof units;

  type ValidUnitWithMultiplier<T extends string> = T extends `${
    | ValidMultiplier
    | ValidNumber} ${infer Rest}`
    ? ValidUnitWithMultiplier<Rest>
    : T extends ValidUnit // needs to end with unit
    ? true
    : false;

  type ValidNumberWithUnit = `${ValidNumber} ${ValidUnit}`;

  type ValidValue<T extends string> = ValidUnitWithMultiplier<T> extends true
    ? true
    : T extends ValidNumberWithUnit
    ? true
    : T extends ValidNumber
    ? true
    : false;

  type ValidSentenceInner<T extends string> =
    Uppercase<T> extends `${infer Curr} AND ${infer Rest}`
      ? ValidValue<Uppercase<Curr>> extends true
        ? ValidSentenceInner<Uppercase<Rest>>
        : false
      : ValidValue<Uppercase<T>>; // ingen 'and'

  type ValidSentence<T extends string> = Uppercase<T> extends `IN ${infer Rest}`
    ? ValidSentenceInner<Rest>
    : Uppercase<T> extends `${infer Rest} AGO`
    ? ValidSentenceInner<Rest>
    : ValidSentenceInner<T>;

  type ValidArg<T extends string> = ValidSentence<T> extends true ? T : never;

  const timeproxy = <T extends string>(time: ValidArg<T>): number => {
    return 0;
  };
  export default timeproxy;
}
