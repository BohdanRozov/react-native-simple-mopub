import { NativeModules } from 'react-native';

type SimpleMopubType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SimpleMopub } = NativeModules;

export default SimpleMopub as SimpleMopubType;
