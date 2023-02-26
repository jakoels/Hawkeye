import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStake = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stake, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStake = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stake, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stake = LazyLoading extends LazyLoadingDisabled ? EagerStake : LazyStake

export declare const Stake: (new (init: ModelInit<Stake>) => Stake) & {
  copyOf(source: Stake, mutator: (draft: MutableModel<Stake>) => MutableModel<Stake> | void): Stake;
}

type EagerCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Condition = LazyLoading extends LazyLoadingDisabled ? EagerCondition : LazyCondition

export declare const Condition: (new (init: ModelInit<Condition>) => Condition) & {
  copyOf(source: Condition, mutator: (draft: MutableModel<Condition>) => MutableModel<Condition> | void): Condition;
}