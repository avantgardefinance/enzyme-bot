import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type AccessorSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'AccessorSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  prevAccessor?: Maybe<Scalars['String']>;
  nextAccessor: Scalars['String'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
};

export type AccessorSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  prevAccessor?: Maybe<Scalars['String']>;
  prevAccessor_not?: Maybe<Scalars['String']>;
  prevAccessor_gt?: Maybe<Scalars['String']>;
  prevAccessor_lt?: Maybe<Scalars['String']>;
  prevAccessor_gte?: Maybe<Scalars['String']>;
  prevAccessor_lte?: Maybe<Scalars['String']>;
  prevAccessor_in?: Maybe<Array<Scalars['String']>>;
  prevAccessor_not_in?: Maybe<Array<Scalars['String']>>;
  prevAccessor_contains?: Maybe<Scalars['String']>;
  prevAccessor_not_contains?: Maybe<Scalars['String']>;
  prevAccessor_starts_with?: Maybe<Scalars['String']>;
  prevAccessor_not_starts_with?: Maybe<Scalars['String']>;
  prevAccessor_ends_with?: Maybe<Scalars['String']>;
  prevAccessor_not_ends_with?: Maybe<Scalars['String']>;
  nextAccessor?: Maybe<Scalars['String']>;
  nextAccessor_not?: Maybe<Scalars['String']>;
  nextAccessor_gt?: Maybe<Scalars['String']>;
  nextAccessor_lt?: Maybe<Scalars['String']>;
  nextAccessor_gte?: Maybe<Scalars['String']>;
  nextAccessor_lte?: Maybe<Scalars['String']>;
  nextAccessor_in?: Maybe<Array<Scalars['String']>>;
  nextAccessor_not_in?: Maybe<Array<Scalars['String']>>;
  nextAccessor_contains?: Maybe<Scalars['String']>;
  nextAccessor_not_contains?: Maybe<Scalars['String']>;
  nextAccessor_starts_with?: Maybe<Scalars['String']>;
  nextAccessor_not_starts_with?: Maybe<Scalars['String']>;
  nextAccessor_ends_with?: Maybe<Scalars['String']>;
  nextAccessor_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum AccessorSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  PrevAccessor = 'prevAccessor',
  NextAccessor = 'nextAccessor',
  Transaction = 'transaction',
  Timestamp = 'timestamp'
}

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  firstSeen: Scalars['BigInt'];
  manager: Scalars['Boolean'];
  managerSince?: Maybe<Scalars['BigInt']>;
  managements: Array<Fund>;
  investor: Scalars['Boolean'];
  investorSince?: Maybe<Scalars['BigInt']>;
  investments: Array<Investment>;
  sharesChanges: Array<SharesChangeInterface>;
  feeSharesChanges: Array<FeeSharesChangeInterface>;
  investmentSharesChanges: Array<InvestmentSharesChangeInterface>;
  events: Array<FundEventInterface>;
  transactions: Array<Transaction>;
  whitelisted: Array<InvestorWhitelistSetting>;
};


export type AccountManagementsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
};


export type AccountInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
};


export type AccountSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesChangeInterface_Filter>;
};


export type AccountFeeSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSharesChangeInterface_Filter>;
};


export type AccountInvestmentSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentSharesChangeInterface_Filter>;
};


export type AccountEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};


export type AccountTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
};


export type AccountWhitelistedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistSetting_Filter>;
};

export type Account_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  firstSeen?: Maybe<Scalars['BigInt']>;
  firstSeen_not?: Maybe<Scalars['BigInt']>;
  firstSeen_gt?: Maybe<Scalars['BigInt']>;
  firstSeen_lt?: Maybe<Scalars['BigInt']>;
  firstSeen_gte?: Maybe<Scalars['BigInt']>;
  firstSeen_lte?: Maybe<Scalars['BigInt']>;
  firstSeen_in?: Maybe<Array<Scalars['BigInt']>>;
  firstSeen_not_in?: Maybe<Array<Scalars['BigInt']>>;
  manager?: Maybe<Scalars['Boolean']>;
  manager_not?: Maybe<Scalars['Boolean']>;
  manager_in?: Maybe<Array<Scalars['Boolean']>>;
  manager_not_in?: Maybe<Array<Scalars['Boolean']>>;
  managerSince?: Maybe<Scalars['BigInt']>;
  managerSince_not?: Maybe<Scalars['BigInt']>;
  managerSince_gt?: Maybe<Scalars['BigInt']>;
  managerSince_lt?: Maybe<Scalars['BigInt']>;
  managerSince_gte?: Maybe<Scalars['BigInt']>;
  managerSince_lte?: Maybe<Scalars['BigInt']>;
  managerSince_in?: Maybe<Array<Scalars['BigInt']>>;
  managerSince_not_in?: Maybe<Array<Scalars['BigInt']>>;
  investor?: Maybe<Scalars['Boolean']>;
  investor_not?: Maybe<Scalars['Boolean']>;
  investor_in?: Maybe<Array<Scalars['Boolean']>>;
  investor_not_in?: Maybe<Array<Scalars['Boolean']>>;
  investorSince?: Maybe<Scalars['BigInt']>;
  investorSince_not?: Maybe<Scalars['BigInt']>;
  investorSince_gt?: Maybe<Scalars['BigInt']>;
  investorSince_lt?: Maybe<Scalars['BigInt']>;
  investorSince_gte?: Maybe<Scalars['BigInt']>;
  investorSince_lte?: Maybe<Scalars['BigInt']>;
  investorSince_in?: Maybe<Array<Scalars['BigInt']>>;
  investorSince_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  FirstSeen = 'firstSeen',
  Manager = 'manager',
  ManagerSince = 'managerSince',
  Managements = 'managements',
  Investor = 'investor',
  InvestorSince = 'investorSince',
  Investments = 'investments',
  SharesChanges = 'sharesChanges',
  FeeSharesChanges = 'feeSharesChanges',
  InvestmentSharesChanges = 'investmentSharesChanges',
  Events = 'events',
  Transactions = 'transactions',
  Whitelisted = 'whitelisted'
}

export type AdapterBlacklistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AdapterBlacklistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<IntegrationAdapter>;
};


export type AdapterBlacklistAddressesAddedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type AdapterBlacklistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterBlacklistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AdapterBlacklistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AdapterBlacklistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<IntegrationAdapter>;
};


export type AdapterBlacklistAddressesRemovedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type AdapterBlacklistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterBlacklistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AdapterBlacklistSetting = PolicySettingInterface & {
  __typename?: 'AdapterBlacklistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Scalars['String']>;
  adapters: Array<Maybe<IntegrationAdapter>>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type AdapterBlacklistSettingAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};


export type AdapterBlacklistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type AdapterBlacklistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  adapters?: Maybe<Array<Scalars['String']>>;
  adapters_not?: Maybe<Array<Scalars['String']>>;
  adapters_contains?: Maybe<Array<Scalars['String']>>;
  adapters_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterBlacklistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Adapters = 'adapters',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type AdapterDeregisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'AdapterDeregisteredEvent';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  integrationAdapter: IntegrationAdapter;
};

export type AdapterDeregisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  integrationAdapter?: Maybe<Scalars['String']>;
  integrationAdapter_not?: Maybe<Scalars['String']>;
  integrationAdapter_gt?: Maybe<Scalars['String']>;
  integrationAdapter_lt?: Maybe<Scalars['String']>;
  integrationAdapter_gte?: Maybe<Scalars['String']>;
  integrationAdapter_lte?: Maybe<Scalars['String']>;
  integrationAdapter_in?: Maybe<Array<Scalars['String']>>;
  integrationAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  integrationAdapter_contains?: Maybe<Scalars['String']>;
  integrationAdapter_not_contains?: Maybe<Scalars['String']>;
  integrationAdapter_starts_with?: Maybe<Scalars['String']>;
  integrationAdapter_not_starts_with?: Maybe<Scalars['String']>;
  integrationAdapter_ends_with?: Maybe<Scalars['String']>;
  integrationAdapter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AdapterDeregisteredEvent_OrderBy {
  Id = 'id',
  Identifier = 'identifier',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  IntegrationAdapter = 'integrationAdapter'
}

export type AdapterRegisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'AdapterRegisteredEvent';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  integrationAdapter: IntegrationAdapter;
};

export type AdapterRegisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  integrationAdapter?: Maybe<Scalars['String']>;
  integrationAdapter_not?: Maybe<Scalars['String']>;
  integrationAdapter_gt?: Maybe<Scalars['String']>;
  integrationAdapter_lt?: Maybe<Scalars['String']>;
  integrationAdapter_gte?: Maybe<Scalars['String']>;
  integrationAdapter_lte?: Maybe<Scalars['String']>;
  integrationAdapter_in?: Maybe<Array<Scalars['String']>>;
  integrationAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  integrationAdapter_contains?: Maybe<Scalars['String']>;
  integrationAdapter_not_contains?: Maybe<Scalars['String']>;
  integrationAdapter_starts_with?: Maybe<Scalars['String']>;
  integrationAdapter_not_starts_with?: Maybe<Scalars['String']>;
  integrationAdapter_ends_with?: Maybe<Scalars['String']>;
  integrationAdapter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AdapterRegisteredEvent_OrderBy {
  Id = 'id',
  Identifier = 'identifier',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  IntegrationAdapter = 'integrationAdapter'
}

export type AdapterWhitelistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AdapterWhitelistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<IntegrationAdapter>;
};


export type AdapterWhitelistAddressesAddedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type AdapterWhitelistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterWhitelistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AdapterWhitelistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AdapterWhitelistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<IntegrationAdapter>;
};


export type AdapterWhitelistAddressesRemovedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type AdapterWhitelistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterWhitelistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AdapterWhitelistSetting = PolicySettingInterface & {
  __typename?: 'AdapterWhitelistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Scalars['String']>;
  adapters: Array<Maybe<IntegrationAdapter>>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type AdapterWhitelistSettingAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};


export type AdapterWhitelistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type AdapterWhitelistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  adapters?: Maybe<Array<Scalars['String']>>;
  adapters_not?: Maybe<Array<Scalars['String']>>;
  adapters_contains?: Maybe<Array<Scalars['String']>>;
  adapters_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AdapterWhitelistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Adapters = 'adapters',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type AddTrackedAssetsTrade = Trade & {
  __typename?: 'AddTrackedAssetsTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};


export type AddTrackedAssetsTradeIncomingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type AddTrackedAssetsTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AddTrackedAssetsTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmounts = 'incomingAssetAmounts',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type AggregatorUpdatedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'AggregatorUpdatedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  primitive: Asset;
  prevAggregator: Scalars['String'];
  nextAggregator: Scalars['String'];
};

export type AggregatorUpdatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  primitive?: Maybe<Scalars['String']>;
  primitive_not?: Maybe<Scalars['String']>;
  primitive_gt?: Maybe<Scalars['String']>;
  primitive_lt?: Maybe<Scalars['String']>;
  primitive_gte?: Maybe<Scalars['String']>;
  primitive_lte?: Maybe<Scalars['String']>;
  primitive_in?: Maybe<Array<Scalars['String']>>;
  primitive_not_in?: Maybe<Array<Scalars['String']>>;
  primitive_contains?: Maybe<Scalars['String']>;
  primitive_not_contains?: Maybe<Scalars['String']>;
  primitive_starts_with?: Maybe<Scalars['String']>;
  primitive_not_starts_with?: Maybe<Scalars['String']>;
  primitive_ends_with?: Maybe<Scalars['String']>;
  primitive_not_ends_with?: Maybe<Scalars['String']>;
  prevAggregator?: Maybe<Scalars['String']>;
  prevAggregator_not?: Maybe<Scalars['String']>;
  prevAggregator_gt?: Maybe<Scalars['String']>;
  prevAggregator_lt?: Maybe<Scalars['String']>;
  prevAggregator_gte?: Maybe<Scalars['String']>;
  prevAggregator_lte?: Maybe<Scalars['String']>;
  prevAggregator_in?: Maybe<Array<Scalars['String']>>;
  prevAggregator_not_in?: Maybe<Array<Scalars['String']>>;
  prevAggregator_contains?: Maybe<Scalars['String']>;
  prevAggregator_not_contains?: Maybe<Scalars['String']>;
  prevAggregator_starts_with?: Maybe<Scalars['String']>;
  prevAggregator_not_starts_with?: Maybe<Scalars['String']>;
  prevAggregator_ends_with?: Maybe<Scalars['String']>;
  prevAggregator_not_ends_with?: Maybe<Scalars['String']>;
  nextAggregator?: Maybe<Scalars['String']>;
  nextAggregator_not?: Maybe<Scalars['String']>;
  nextAggregator_gt?: Maybe<Scalars['String']>;
  nextAggregator_lt?: Maybe<Scalars['String']>;
  nextAggregator_gte?: Maybe<Scalars['String']>;
  nextAggregator_lte?: Maybe<Scalars['String']>;
  nextAggregator_in?: Maybe<Array<Scalars['String']>>;
  nextAggregator_not_in?: Maybe<Array<Scalars['String']>>;
  nextAggregator_contains?: Maybe<Scalars['String']>;
  nextAggregator_not_contains?: Maybe<Scalars['String']>;
  nextAggregator_starts_with?: Maybe<Scalars['String']>;
  nextAggregator_not_starts_with?: Maybe<Scalars['String']>;
  nextAggregator_ends_with?: Maybe<Scalars['String']>;
  nextAggregator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AggregatorUpdatedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Primitive = 'primitive',
  PrevAggregator = 'prevAggregator',
  NextAggregator = 'nextAggregator'
}

export type AllSharesOutstandingForcePaidForFundEvent = EventInterface & FundEventInterface & SharesChangeInterface & FeeSharesChangeInterface & {
  __typename?: 'AllSharesOutstandingForcePaidForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  type: ShareChangeType;
  account: Account;
  investor: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  comptrollerProxy: Scalars['String'];
  payee: Scalars['String'];
  sharesDue: Scalars['BigDecimal'];
  calculations: CalculationState;
  fundState: FundState;
};

export type AllSharesOutstandingForcePaidForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  payee_not?: Maybe<Scalars['String']>;
  payee_gt?: Maybe<Scalars['String']>;
  payee_lt?: Maybe<Scalars['String']>;
  payee_gte?: Maybe<Scalars['String']>;
  payee_lte?: Maybe<Scalars['String']>;
  payee_in?: Maybe<Array<Scalars['String']>>;
  payee_not_in?: Maybe<Array<Scalars['String']>>;
  payee_contains?: Maybe<Scalars['String']>;
  payee_not_contains?: Maybe<Scalars['String']>;
  payee_starts_with?: Maybe<Scalars['String']>;
  payee_not_starts_with?: Maybe<Scalars['String']>;
  payee_ends_with?: Maybe<Scalars['String']>;
  payee_not_ends_with?: Maybe<Scalars['String']>;
  sharesDue?: Maybe<Scalars['BigDecimal']>;
  sharesDue_not?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AllSharesOutstandingForcePaidForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Type = 'type',
  Account = 'account',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  ComptrollerProxy = 'comptrollerProxy',
  Payee = 'payee',
  SharesDue = 'sharesDue',
  Calculations = 'calculations',
  FundState = 'fundState'
}

export type ApprovalEvent = EventInterface & FundEventInterface & {
  __typename?: 'ApprovalEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  owner: Scalars['String'];
  spender: Scalars['String'];
  value: Scalars['BigDecimal'];
};

export type ApprovalEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  spender?: Maybe<Scalars['String']>;
  spender_not?: Maybe<Scalars['String']>;
  spender_gt?: Maybe<Scalars['String']>;
  spender_lt?: Maybe<Scalars['String']>;
  spender_gte?: Maybe<Scalars['String']>;
  spender_lte?: Maybe<Scalars['String']>;
  spender_in?: Maybe<Array<Scalars['String']>>;
  spender_not_in?: Maybe<Array<Scalars['String']>>;
  spender_contains?: Maybe<Scalars['String']>;
  spender_not_contains?: Maybe<Scalars['String']>;
  spender_starts_with?: Maybe<Scalars['String']>;
  spender_not_starts_with?: Maybe<Scalars['String']>;
  spender_ends_with?: Maybe<Scalars['String']>;
  spender_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigDecimal']>;
  value_not?: Maybe<Scalars['BigDecimal']>;
  value_gt?: Maybe<Scalars['BigDecimal']>;
  value_lt?: Maybe<Scalars['BigDecimal']>;
  value_gte?: Maybe<Scalars['BigDecimal']>;
  value_lte?: Maybe<Scalars['BigDecimal']>;
  value_in?: Maybe<Array<Scalars['BigDecimal']>>;
  value_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum ApprovalEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Owner = 'owner',
  Spender = 'spender',
  Value = 'value'
}

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['Int'];
  type: AssetType;
  removed: Scalars['Boolean'];
  derivativeType?: Maybe<DerivativeType>;
  uniswapV2PoolAssetDetail?: Maybe<UniswapV2PoolAssetDetail>;
  compoundAssetDetail?: Maybe<CompoundAssetDetails>;
  price?: Maybe<AssetPrice>;
  hourly?: Maybe<HourlyAssetPriceCandle>;
  daily?: Maybe<DailyAssetPriceCandle>;
  monthly?: Maybe<MonthlyAssetPriceCandle>;
  priceHistory: Array<AssetPrice>;
  hourlyHistory: Array<HourlyAssetPriceCandle>;
  dailyHistory: Array<DailyAssetPriceCandle>;
  monthlyHistory: Array<MonthlyAssetPriceCandle>;
  denominatedFunds: Array<Fund>;
  trackingFunds: Array<Fund>;
  blacklisted: Array<AssetBlacklistSetting>;
  whitelisted: Array<AssetWhitelistSetting>;
  networkAssetHolding?: Maybe<NetworkAssetHolding>;
  networkAssetHoldingHistory: Array<NetworkAssetHolding>;
};


export type AssetPriceHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetPrice_Filter>;
};


export type AssetHourlyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyAssetPriceCandle_Filter>;
};


export type AssetDailyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyAssetPriceCandle_Filter>;
};


export type AssetMonthlyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyAssetPriceCandle_Filter>;
};


export type AssetDenominatedFundsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
};


export type AssetTrackingFundsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
};


export type AssetBlacklistedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistSetting_Filter>;
};


export type AssetWhitelistedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistSetting_Filter>;
};


export type AssetNetworkAssetHoldingHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkAssetHolding_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkAssetHolding_Filter>;
};

export type AssetAmount = {
  __typename?: 'AssetAmount';
  id: Scalars['ID'];
  asset: Asset;
  amount: Scalars['BigDecimal'];
  price?: Maybe<AssetPrice>;
};

export type AssetAmount_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price?: Maybe<Scalars['String']>;
  price_not?: Maybe<Scalars['String']>;
  price_gt?: Maybe<Scalars['String']>;
  price_lt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['String']>;
  price_lte?: Maybe<Scalars['String']>;
  price_in?: Maybe<Array<Scalars['String']>>;
  price_not_in?: Maybe<Array<Scalars['String']>>;
  price_contains?: Maybe<Scalars['String']>;
  price_not_contains?: Maybe<Scalars['String']>;
  price_starts_with?: Maybe<Scalars['String']>;
  price_not_starts_with?: Maybe<Scalars['String']>;
  price_ends_with?: Maybe<Scalars['String']>;
  price_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AssetAmount_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Amount = 'amount',
  Price = 'price'
}

export type AssetBlacklistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AssetBlacklistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Asset>;
};


export type AssetBlacklistAddressesAddedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};

export type AssetBlacklistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetBlacklistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AssetBlacklistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AssetBlacklistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Asset>;
};


export type AssetBlacklistAddressesRemovedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};

export type AssetBlacklistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetBlacklistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AssetBlacklistSetting = PolicySettingInterface & {
  __typename?: 'AssetBlacklistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Scalars['String']>;
  assets: Array<Maybe<Asset>>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type AssetBlacklistSettingAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type AssetBlacklistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type AssetBlacklistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  assets?: Maybe<Array<Scalars['String']>>;
  assets_not?: Maybe<Array<Scalars['String']>>;
  assets_contains?: Maybe<Array<Scalars['String']>>;
  assets_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetBlacklistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Assets = 'assets',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type AssetPrice = {
  __typename?: 'AssetPrice';
  id: Scalars['ID'];
  asset: Asset;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
};

export type AssetPrice_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum AssetPrice_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Price = 'price',
  Timestamp = 'timestamp'
}

export enum AssetType {
  Unknown = 'UNKNOWN',
  Derivative = 'DERIVATIVE',
  Eth = 'ETH',
  Usd = 'USD'
}

export type AssetWhitelistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AssetWhitelistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Asset>;
};


export type AssetWhitelistAddressesAddedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};

export type AssetWhitelistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetWhitelistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AssetWhitelistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'AssetWhitelistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Asset>;
};


export type AssetWhitelistAddressesRemovedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};

export type AssetWhitelistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetWhitelistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type AssetWhitelistSetting = PolicySettingInterface & {
  __typename?: 'AssetWhitelistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Scalars['String']>;
  assets: Array<Maybe<Asset>>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type AssetWhitelistSettingAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type AssetWhitelistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type AssetWhitelistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  assets?: Maybe<Array<Scalars['String']>>;
  assets_not?: Maybe<Array<Scalars['String']>>;
  assets_contains?: Maybe<Array<Scalars['String']>>;
  assets_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum AssetWhitelistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Assets = 'assets',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type AssetWithdrawnEvent = EventInterface & FundEventInterface & {
  __typename?: 'AssetWithdrawnEvent';
  id: Scalars['ID'];
  asset: Asset;
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  target: Scalars['String'];
  amount: Scalars['BigDecimal'];
};

export type AssetWithdrawnEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  target_not?: Maybe<Scalars['String']>;
  target_gt?: Maybe<Scalars['String']>;
  target_lt?: Maybe<Scalars['String']>;
  target_gte?: Maybe<Scalars['String']>;
  target_lte?: Maybe<Scalars['String']>;
  target_in?: Maybe<Array<Scalars['String']>>;
  target_not_in?: Maybe<Array<Scalars['String']>>;
  target_contains?: Maybe<Scalars['String']>;
  target_not_contains?: Maybe<Scalars['String']>;
  target_starts_with?: Maybe<Scalars['String']>;
  target_not_starts_with?: Maybe<Scalars['String']>;
  target_ends_with?: Maybe<Scalars['String']>;
  target_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum AssetWithdrawnEvent_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Target = 'target',
  Amount = 'amount'
}

export type Asset_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  type?: Maybe<AssetType>;
  type_not?: Maybe<AssetType>;
  removed?: Maybe<Scalars['Boolean']>;
  removed_not?: Maybe<Scalars['Boolean']>;
  removed_in?: Maybe<Array<Scalars['Boolean']>>;
  removed_not_in?: Maybe<Array<Scalars['Boolean']>>;
  derivativeType?: Maybe<DerivativeType>;
  derivativeType_not?: Maybe<DerivativeType>;
  uniswapV2PoolAssetDetail?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_not?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_gt?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_lt?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_gte?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_lte?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2PoolAssetDetail_not_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2PoolAssetDetail_contains?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_not_contains?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_starts_with?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_not_starts_with?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_ends_with?: Maybe<Scalars['String']>;
  uniswapV2PoolAssetDetail_not_ends_with?: Maybe<Scalars['String']>;
  compoundAssetDetail?: Maybe<Scalars['String']>;
  compoundAssetDetail_not?: Maybe<Scalars['String']>;
  compoundAssetDetail_gt?: Maybe<Scalars['String']>;
  compoundAssetDetail_lt?: Maybe<Scalars['String']>;
  compoundAssetDetail_gte?: Maybe<Scalars['String']>;
  compoundAssetDetail_lte?: Maybe<Scalars['String']>;
  compoundAssetDetail_in?: Maybe<Array<Scalars['String']>>;
  compoundAssetDetail_not_in?: Maybe<Array<Scalars['String']>>;
  compoundAssetDetail_contains?: Maybe<Scalars['String']>;
  compoundAssetDetail_not_contains?: Maybe<Scalars['String']>;
  compoundAssetDetail_starts_with?: Maybe<Scalars['String']>;
  compoundAssetDetail_not_starts_with?: Maybe<Scalars['String']>;
  compoundAssetDetail_ends_with?: Maybe<Scalars['String']>;
  compoundAssetDetail_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  price_not?: Maybe<Scalars['String']>;
  price_gt?: Maybe<Scalars['String']>;
  price_lt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['String']>;
  price_lte?: Maybe<Scalars['String']>;
  price_in?: Maybe<Array<Scalars['String']>>;
  price_not_in?: Maybe<Array<Scalars['String']>>;
  price_contains?: Maybe<Scalars['String']>;
  price_not_contains?: Maybe<Scalars['String']>;
  price_starts_with?: Maybe<Scalars['String']>;
  price_not_starts_with?: Maybe<Scalars['String']>;
  price_ends_with?: Maybe<Scalars['String']>;
  price_not_ends_with?: Maybe<Scalars['String']>;
  hourly?: Maybe<Scalars['String']>;
  hourly_not?: Maybe<Scalars['String']>;
  hourly_gt?: Maybe<Scalars['String']>;
  hourly_lt?: Maybe<Scalars['String']>;
  hourly_gte?: Maybe<Scalars['String']>;
  hourly_lte?: Maybe<Scalars['String']>;
  hourly_in?: Maybe<Array<Scalars['String']>>;
  hourly_not_in?: Maybe<Array<Scalars['String']>>;
  hourly_contains?: Maybe<Scalars['String']>;
  hourly_not_contains?: Maybe<Scalars['String']>;
  hourly_starts_with?: Maybe<Scalars['String']>;
  hourly_not_starts_with?: Maybe<Scalars['String']>;
  hourly_ends_with?: Maybe<Scalars['String']>;
  hourly_not_ends_with?: Maybe<Scalars['String']>;
  daily?: Maybe<Scalars['String']>;
  daily_not?: Maybe<Scalars['String']>;
  daily_gt?: Maybe<Scalars['String']>;
  daily_lt?: Maybe<Scalars['String']>;
  daily_gte?: Maybe<Scalars['String']>;
  daily_lte?: Maybe<Scalars['String']>;
  daily_in?: Maybe<Array<Scalars['String']>>;
  daily_not_in?: Maybe<Array<Scalars['String']>>;
  daily_contains?: Maybe<Scalars['String']>;
  daily_not_contains?: Maybe<Scalars['String']>;
  daily_starts_with?: Maybe<Scalars['String']>;
  daily_not_starts_with?: Maybe<Scalars['String']>;
  daily_ends_with?: Maybe<Scalars['String']>;
  daily_not_ends_with?: Maybe<Scalars['String']>;
  monthly?: Maybe<Scalars['String']>;
  monthly_not?: Maybe<Scalars['String']>;
  monthly_gt?: Maybe<Scalars['String']>;
  monthly_lt?: Maybe<Scalars['String']>;
  monthly_gte?: Maybe<Scalars['String']>;
  monthly_lte?: Maybe<Scalars['String']>;
  monthly_in?: Maybe<Array<Scalars['String']>>;
  monthly_not_in?: Maybe<Array<Scalars['String']>>;
  monthly_contains?: Maybe<Scalars['String']>;
  monthly_not_contains?: Maybe<Scalars['String']>;
  monthly_starts_with?: Maybe<Scalars['String']>;
  monthly_not_starts_with?: Maybe<Scalars['String']>;
  monthly_ends_with?: Maybe<Scalars['String']>;
  monthly_not_ends_with?: Maybe<Scalars['String']>;
  networkAssetHolding?: Maybe<Scalars['String']>;
  networkAssetHolding_not?: Maybe<Scalars['String']>;
  networkAssetHolding_gt?: Maybe<Scalars['String']>;
  networkAssetHolding_lt?: Maybe<Scalars['String']>;
  networkAssetHolding_gte?: Maybe<Scalars['String']>;
  networkAssetHolding_lte?: Maybe<Scalars['String']>;
  networkAssetHolding_in?: Maybe<Array<Scalars['String']>>;
  networkAssetHolding_not_in?: Maybe<Array<Scalars['String']>>;
  networkAssetHolding_contains?: Maybe<Scalars['String']>;
  networkAssetHolding_not_contains?: Maybe<Scalars['String']>;
  networkAssetHolding_starts_with?: Maybe<Scalars['String']>;
  networkAssetHolding_not_starts_with?: Maybe<Scalars['String']>;
  networkAssetHolding_ends_with?: Maybe<Scalars['String']>;
  networkAssetHolding_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Asset_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  Type = 'type',
  Removed = 'removed',
  DerivativeType = 'derivativeType',
  UniswapV2PoolAssetDetail = 'uniswapV2PoolAssetDetail',
  CompoundAssetDetail = 'compoundAssetDetail',
  Price = 'price',
  Hourly = 'hourly',
  Daily = 'daily',
  Monthly = 'monthly',
  PriceHistory = 'priceHistory',
  HourlyHistory = 'hourlyHistory',
  DailyHistory = 'dailyHistory',
  MonthlyHistory = 'monthlyHistory',
  DenominatedFunds = 'denominatedFunds',
  TrackingFunds = 'trackingFunds',
  Blacklisted = 'blacklisted',
  Whitelisted = 'whitelisted',
  NetworkAssetHolding = 'networkAssetHolding',
  NetworkAssetHoldingHistory = 'networkAssetHoldingHistory'
}

export type AuthUserAddedForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'AuthUserAddedForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type AuthUserAddedForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AuthUserAddedForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type AuthUserRemovedForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'AuthUserRemovedForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type AuthUserRemovedForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AuthUserRemovedForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type BuySharesCallerWhitelistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'BuySharesCallerWhitelistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Scalars['String']>;
};

export type BuySharesCallerWhitelistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum BuySharesCallerWhitelistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type BuySharesCallerWhitelistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'BuySharesCallerWhitelistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Scalars['String']>;
};

export type BuySharesCallerWhitelistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum BuySharesCallerWhitelistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type BuySharesCallerWhitelistSetting = PolicySettingInterface & {
  __typename?: 'BuySharesCallerWhitelistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Scalars['String']>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type BuySharesCallerWhitelistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type BuySharesCallerWhitelistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum BuySharesCallerWhitelistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}


export type CalculationState = FundStateInterface & {
  __typename?: 'CalculationState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  gav: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  grossSharePrice: Scalars['BigDecimal'];
  netSharePrice: Scalars['BigDecimal'];
  events: Array<FundEventInterface>;
};


export type CalculationStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type CalculationState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gav?: Maybe<Scalars['BigDecimal']>;
  gav_not?: Maybe<Scalars['BigDecimal']>;
  gav_gt?: Maybe<Scalars['BigDecimal']>;
  gav_lt?: Maybe<Scalars['BigDecimal']>;
  gav_gte?: Maybe<Scalars['BigDecimal']>;
  gav_lte?: Maybe<Scalars['BigDecimal']>;
  gav_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gav_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  grossSharePrice?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_not?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_gt?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_lt?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_gte?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_lte?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  grossSharePrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  netSharePrice?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_not?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_gt?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_lt?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_gte?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_lte?: Maybe<Scalars['BigDecimal']>;
  netSharePrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  netSharePrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum CalculationState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Gav = 'gav',
  TotalSupply = 'totalSupply',
  GrossSharePrice = 'grossSharePrice',
  NetSharePrice = 'netSharePrice',
  Events = 'events'
}

export type CallOnIntegrationExecutedForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'CallOnIntegrationExecutedForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  adapter: IntegrationAdapter;
  selector: Scalars['String'];
  integrationData: Scalars['String'];
  incomingAssetAmounts: Array<AssetAmount>;
  outgoingAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};


export type CallOnIntegrationExecutedForFundEventIncomingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};


export type CallOnIntegrationExecutedForFundEventOutgoingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type CallOnIntegrationExecutedForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  selector?: Maybe<Scalars['String']>;
  selector_not?: Maybe<Scalars['String']>;
  selector_gt?: Maybe<Scalars['String']>;
  selector_lt?: Maybe<Scalars['String']>;
  selector_gte?: Maybe<Scalars['String']>;
  selector_lte?: Maybe<Scalars['String']>;
  selector_in?: Maybe<Array<Scalars['String']>>;
  selector_not_in?: Maybe<Array<Scalars['String']>>;
  selector_contains?: Maybe<Scalars['String']>;
  selector_not_contains?: Maybe<Scalars['String']>;
  selector_starts_with?: Maybe<Scalars['String']>;
  selector_not_starts_with?: Maybe<Scalars['String']>;
  selector_ends_with?: Maybe<Scalars['String']>;
  selector_not_ends_with?: Maybe<Scalars['String']>;
  integrationData?: Maybe<Scalars['String']>;
  integrationData_not?: Maybe<Scalars['String']>;
  integrationData_gt?: Maybe<Scalars['String']>;
  integrationData_lt?: Maybe<Scalars['String']>;
  integrationData_gte?: Maybe<Scalars['String']>;
  integrationData_lte?: Maybe<Scalars['String']>;
  integrationData_in?: Maybe<Array<Scalars['String']>>;
  integrationData_not_in?: Maybe<Array<Scalars['String']>>;
  integrationData_contains?: Maybe<Scalars['String']>;
  integrationData_not_contains?: Maybe<Scalars['String']>;
  integrationData_starts_with?: Maybe<Scalars['String']>;
  integrationData_not_starts_with?: Maybe<Scalars['String']>;
  integrationData_ends_with?: Maybe<Scalars['String']>;
  integrationData_not_ends_with?: Maybe<Scalars['String']>;
  incomingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CallOnIntegrationExecutedForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Adapter = 'adapter',
  Selector = 'selector',
  IntegrationData = 'integrationData',
  IncomingAssetAmounts = 'incomingAssetAmounts',
  OutgoingAssetAmounts = 'outgoingAssetAmounts',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type ChainlinkAggregatorProxy = {
  __typename?: 'ChainlinkAggregatorProxy';
  id: Scalars['ID'];
  aggregator: Scalars['String'];
  type: ChainlinkAggregatorProxyType;
  decimals: Scalars['Int'];
  asset?: Maybe<Asset>;
  currency?: Maybe<Currency>;
};

export enum ChainlinkAggregatorProxyType {
  Asset = 'ASSET',
  Ethusd = 'ETHUSD',
  Currency = 'CURRENCY'
}

export type ChainlinkAggregatorProxy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  aggregator?: Maybe<Scalars['String']>;
  aggregator_not?: Maybe<Scalars['String']>;
  aggregator_gt?: Maybe<Scalars['String']>;
  aggregator_lt?: Maybe<Scalars['String']>;
  aggregator_gte?: Maybe<Scalars['String']>;
  aggregator_lte?: Maybe<Scalars['String']>;
  aggregator_in?: Maybe<Array<Scalars['String']>>;
  aggregator_not_in?: Maybe<Array<Scalars['String']>>;
  aggregator_contains?: Maybe<Scalars['String']>;
  aggregator_not_contains?: Maybe<Scalars['String']>;
  aggregator_starts_with?: Maybe<Scalars['String']>;
  aggregator_not_starts_with?: Maybe<Scalars['String']>;
  aggregator_ends_with?: Maybe<Scalars['String']>;
  aggregator_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ChainlinkAggregatorProxyType>;
  type_not?: Maybe<ChainlinkAggregatorProxyType>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ChainlinkAggregatorProxy_OrderBy {
  Id = 'id',
  Aggregator = 'aggregator',
  Type = 'type',
  Decimals = 'decimals',
  Asset = 'asset',
  Currency = 'currency'
}

export type CompoundAssetDetails = {
  __typename?: 'CompoundAssetDetails';
  id: Scalars['ID'];
  underlying?: Maybe<Asset>;
};

export type CompoundAssetDetails_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  underlying?: Maybe<Scalars['String']>;
  underlying_not?: Maybe<Scalars['String']>;
  underlying_gt?: Maybe<Scalars['String']>;
  underlying_lt?: Maybe<Scalars['String']>;
  underlying_gte?: Maybe<Scalars['String']>;
  underlying_lte?: Maybe<Scalars['String']>;
  underlying_in?: Maybe<Array<Scalars['String']>>;
  underlying_not_in?: Maybe<Array<Scalars['String']>>;
  underlying_contains?: Maybe<Scalars['String']>;
  underlying_not_contains?: Maybe<Scalars['String']>;
  underlying_starts_with?: Maybe<Scalars['String']>;
  underlying_not_starts_with?: Maybe<Scalars['String']>;
  underlying_ends_with?: Maybe<Scalars['String']>;
  underlying_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CompoundAssetDetails_OrderBy {
  Id = 'id',
  Underlying = 'underlying'
}

export type ComptrollerLibSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'ComptrollerLibSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerLib: Scalars['String'];
};

export type ComptrollerLibSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerLib?: Maybe<Scalars['String']>;
  comptrollerLib_not?: Maybe<Scalars['String']>;
  comptrollerLib_gt?: Maybe<Scalars['String']>;
  comptrollerLib_lt?: Maybe<Scalars['String']>;
  comptrollerLib_gte?: Maybe<Scalars['String']>;
  comptrollerLib_lte?: Maybe<Scalars['String']>;
  comptrollerLib_in?: Maybe<Array<Scalars['String']>>;
  comptrollerLib_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerLib_contains?: Maybe<Scalars['String']>;
  comptrollerLib_not_contains?: Maybe<Scalars['String']>;
  comptrollerLib_starts_with?: Maybe<Scalars['String']>;
  comptrollerLib_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerLib_ends_with?: Maybe<Scalars['String']>;
  comptrollerLib_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ComptrollerLibSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerLib = 'comptrollerLib'
}

export type ComptrollerProxyDeployedEvent = EventInterface & FundEventInterface & {
  __typename?: 'ComptrollerProxyDeployedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  comptrollerProxy: Scalars['String'];
  transaction: Transaction;
  denominationAsset: Asset;
  sharesActionTimelock: Scalars['BigInt'];
  feeManagerConfigData: Scalars['String'];
  policyManagerConfigData: Scalars['String'];
  forMigration: Scalars['Boolean'];
};

export type ComptrollerProxyDeployedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  denominationAsset?: Maybe<Scalars['String']>;
  denominationAsset_not?: Maybe<Scalars['String']>;
  denominationAsset_gt?: Maybe<Scalars['String']>;
  denominationAsset_lt?: Maybe<Scalars['String']>;
  denominationAsset_gte?: Maybe<Scalars['String']>;
  denominationAsset_lte?: Maybe<Scalars['String']>;
  denominationAsset_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_not_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_contains?: Maybe<Scalars['String']>;
  denominationAsset_not_contains?: Maybe<Scalars['String']>;
  denominationAsset_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_not_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_ends_with?: Maybe<Scalars['String']>;
  denominationAsset_not_ends_with?: Maybe<Scalars['String']>;
  sharesActionTimelock?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_not?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_in?: Maybe<Array<Scalars['BigInt']>>;
  sharesActionTimelock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  feeManagerConfigData?: Maybe<Scalars['String']>;
  feeManagerConfigData_not?: Maybe<Scalars['String']>;
  feeManagerConfigData_gt?: Maybe<Scalars['String']>;
  feeManagerConfigData_lt?: Maybe<Scalars['String']>;
  feeManagerConfigData_gte?: Maybe<Scalars['String']>;
  feeManagerConfigData_lte?: Maybe<Scalars['String']>;
  feeManagerConfigData_in?: Maybe<Array<Scalars['String']>>;
  feeManagerConfigData_not_in?: Maybe<Array<Scalars['String']>>;
  feeManagerConfigData_contains?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_contains?: Maybe<Scalars['String']>;
  feeManagerConfigData_starts_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_starts_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_ends_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_ends_with?: Maybe<Scalars['String']>;
  policyManagerConfigData?: Maybe<Scalars['String']>;
  policyManagerConfigData_not?: Maybe<Scalars['String']>;
  policyManagerConfigData_gt?: Maybe<Scalars['String']>;
  policyManagerConfigData_lt?: Maybe<Scalars['String']>;
  policyManagerConfigData_gte?: Maybe<Scalars['String']>;
  policyManagerConfigData_lte?: Maybe<Scalars['String']>;
  policyManagerConfigData_in?: Maybe<Array<Scalars['String']>>;
  policyManagerConfigData_not_in?: Maybe<Array<Scalars['String']>>;
  policyManagerConfigData_contains?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_contains?: Maybe<Scalars['String']>;
  policyManagerConfigData_starts_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_starts_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_ends_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_ends_with?: Maybe<Scalars['String']>;
  forMigration?: Maybe<Scalars['Boolean']>;
  forMigration_not?: Maybe<Scalars['Boolean']>;
  forMigration_in?: Maybe<Array<Scalars['Boolean']>>;
  forMigration_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum ComptrollerProxyDeployedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  ComptrollerProxy = 'comptrollerProxy',
  Transaction = 'transaction',
  DenominationAsset = 'denominationAsset',
  SharesActionTimelock = 'sharesActionTimelock',
  FeeManagerConfigData = 'feeManagerConfigData',
  PolicyManagerConfigData = 'policyManagerConfigData',
  ForMigration = 'forMigration'
}

export type Cron = {
  __typename?: 'Cron';
  id: Scalars['ID'];
  cron: Scalars['BigInt'];
  primitives: Array<Asset>;
  usdQuotedPrimitives: Array<Asset>;
  derivatives: Array<Asset>;
  currencies: Array<Currency>;
  chainlinkAggregatorProxies: Array<ChainlinkAggregatorProxy>;
};


export type CronPrimitivesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type CronUsdQuotedPrimitivesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type CronDerivativesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type CronCurrenciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Currency_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Currency_Filter>;
};


export type CronChainlinkAggregatorProxiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChainlinkAggregatorProxy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ChainlinkAggregatorProxy_Filter>;
};

export type Cron_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  cron?: Maybe<Scalars['BigInt']>;
  cron_not?: Maybe<Scalars['BigInt']>;
  cron_gt?: Maybe<Scalars['BigInt']>;
  cron_lt?: Maybe<Scalars['BigInt']>;
  cron_gte?: Maybe<Scalars['BigInt']>;
  cron_lte?: Maybe<Scalars['BigInt']>;
  cron_in?: Maybe<Array<Scalars['BigInt']>>;
  cron_not_in?: Maybe<Array<Scalars['BigInt']>>;
  primitives?: Maybe<Array<Scalars['String']>>;
  primitives_not?: Maybe<Array<Scalars['String']>>;
  primitives_contains?: Maybe<Array<Scalars['String']>>;
  primitives_not_contains?: Maybe<Array<Scalars['String']>>;
  usdQuotedPrimitives?: Maybe<Array<Scalars['String']>>;
  usdQuotedPrimitives_not?: Maybe<Array<Scalars['String']>>;
  usdQuotedPrimitives_contains?: Maybe<Array<Scalars['String']>>;
  usdQuotedPrimitives_not_contains?: Maybe<Array<Scalars['String']>>;
  derivatives?: Maybe<Array<Scalars['String']>>;
  derivatives_not?: Maybe<Array<Scalars['String']>>;
  derivatives_contains?: Maybe<Array<Scalars['String']>>;
  derivatives_not_contains?: Maybe<Array<Scalars['String']>>;
  currencies?: Maybe<Array<Scalars['String']>>;
  currencies_not?: Maybe<Array<Scalars['String']>>;
  currencies_contains?: Maybe<Array<Scalars['String']>>;
  currencies_not_contains?: Maybe<Array<Scalars['String']>>;
  chainlinkAggregatorProxies?: Maybe<Array<Scalars['String']>>;
  chainlinkAggregatorProxies_not?: Maybe<Array<Scalars['String']>>;
  chainlinkAggregatorProxies_contains?: Maybe<Array<Scalars['String']>>;
  chainlinkAggregatorProxies_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum Cron_OrderBy {
  Id = 'id',
  Cron = 'cron',
  Primitives = 'primitives',
  UsdQuotedPrimitives = 'usdQuotedPrimitives',
  Derivatives = 'derivatives',
  Currencies = 'currencies',
  ChainlinkAggregatorProxies = 'chainlinkAggregatorProxies'
}

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['ID'];
  price?: Maybe<CurrencyPrice>;
  hourly?: Maybe<HourlyCurrencyPriceCandle>;
  daily?: Maybe<DailyCurrencyPriceCandle>;
  monthly?: Maybe<MonthlyCurrencyPriceCandle>;
  priceHistory: Array<CurrencyPrice>;
  hourlyHistory: Array<HourlyCurrencyPriceCandle>;
  dailyHistory: Array<DailyCurrencyPriceCandle>;
  monthlyHistory: Array<MonthlyCurrencyPriceCandle>;
};


export type CurrencyPriceHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CurrencyPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CurrencyPrice_Filter>;
};


export type CurrencyHourlyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyCurrencyPriceCandle_Filter>;
};


export type CurrencyDailyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyCurrencyPriceCandle_Filter>;
};


export type CurrencyMonthlyHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyCurrencyPriceCandle_Filter>;
};

export type CurrencyPrice = {
  __typename?: 'CurrencyPrice';
  id: Scalars['ID'];
  currency: Currency;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
};

export type CurrencyPrice_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum CurrencyPrice_OrderBy {
  Id = 'id',
  Currency = 'currency',
  Price = 'price',
  Timestamp = 'timestamp'
}

export type Currency_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  price?: Maybe<Scalars['String']>;
  price_not?: Maybe<Scalars['String']>;
  price_gt?: Maybe<Scalars['String']>;
  price_lt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['String']>;
  price_lte?: Maybe<Scalars['String']>;
  price_in?: Maybe<Array<Scalars['String']>>;
  price_not_in?: Maybe<Array<Scalars['String']>>;
  price_contains?: Maybe<Scalars['String']>;
  price_not_contains?: Maybe<Scalars['String']>;
  price_starts_with?: Maybe<Scalars['String']>;
  price_not_starts_with?: Maybe<Scalars['String']>;
  price_ends_with?: Maybe<Scalars['String']>;
  price_not_ends_with?: Maybe<Scalars['String']>;
  hourly?: Maybe<Scalars['String']>;
  hourly_not?: Maybe<Scalars['String']>;
  hourly_gt?: Maybe<Scalars['String']>;
  hourly_lt?: Maybe<Scalars['String']>;
  hourly_gte?: Maybe<Scalars['String']>;
  hourly_lte?: Maybe<Scalars['String']>;
  hourly_in?: Maybe<Array<Scalars['String']>>;
  hourly_not_in?: Maybe<Array<Scalars['String']>>;
  hourly_contains?: Maybe<Scalars['String']>;
  hourly_not_contains?: Maybe<Scalars['String']>;
  hourly_starts_with?: Maybe<Scalars['String']>;
  hourly_not_starts_with?: Maybe<Scalars['String']>;
  hourly_ends_with?: Maybe<Scalars['String']>;
  hourly_not_ends_with?: Maybe<Scalars['String']>;
  daily?: Maybe<Scalars['String']>;
  daily_not?: Maybe<Scalars['String']>;
  daily_gt?: Maybe<Scalars['String']>;
  daily_lt?: Maybe<Scalars['String']>;
  daily_gte?: Maybe<Scalars['String']>;
  daily_lte?: Maybe<Scalars['String']>;
  daily_in?: Maybe<Array<Scalars['String']>>;
  daily_not_in?: Maybe<Array<Scalars['String']>>;
  daily_contains?: Maybe<Scalars['String']>;
  daily_not_contains?: Maybe<Scalars['String']>;
  daily_starts_with?: Maybe<Scalars['String']>;
  daily_not_starts_with?: Maybe<Scalars['String']>;
  daily_ends_with?: Maybe<Scalars['String']>;
  daily_not_ends_with?: Maybe<Scalars['String']>;
  monthly?: Maybe<Scalars['String']>;
  monthly_not?: Maybe<Scalars['String']>;
  monthly_gt?: Maybe<Scalars['String']>;
  monthly_lt?: Maybe<Scalars['String']>;
  monthly_gte?: Maybe<Scalars['String']>;
  monthly_lte?: Maybe<Scalars['String']>;
  monthly_in?: Maybe<Array<Scalars['String']>>;
  monthly_not_in?: Maybe<Array<Scalars['String']>>;
  monthly_contains?: Maybe<Scalars['String']>;
  monthly_not_contains?: Maybe<Scalars['String']>;
  monthly_starts_with?: Maybe<Scalars['String']>;
  monthly_not_starts_with?: Maybe<Scalars['String']>;
  monthly_ends_with?: Maybe<Scalars['String']>;
  monthly_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Currency_OrderBy {
  Id = 'id',
  Price = 'price',
  Hourly = 'hourly',
  Daily = 'daily',
  Monthly = 'monthly',
  PriceHistory = 'priceHistory',
  HourlyHistory = 'hourlyHistory',
  DailyHistory = 'dailyHistory',
  MonthlyHistory = 'monthlyHistory'
}

export type DailyAssetPriceCandle = {
  __typename?: 'DailyAssetPriceCandle';
  id: Scalars['ID'];
  asset: Asset;
  group: DailyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: AssetPrice;
  close: Scalars['BigDecimal'];
  closeRef: AssetPrice;
  low: Scalars['BigDecimal'];
  lowRef: AssetPrice;
  high: Scalars['BigDecimal'];
  highRef: AssetPrice;
};

export type DailyAssetPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DailyAssetPriceCandle_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type DailyCurrencyPriceCandle = {
  __typename?: 'DailyCurrencyPriceCandle';
  id: Scalars['ID'];
  currency: Currency;
  group: DailyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type DailyCurrencyPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DailyCurrencyPriceCandle_OrderBy {
  Id = 'id',
  Currency = 'currency',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type DailyFundState = PeriodicFundStateInterface & {
  __typename?: 'DailyFundState';
  id: Scalars['ID'];
  fund: Fund;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: FundState;
  last: FundState;
};

export type DailyFundState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['BigInt']>;
  start_not?: Maybe<Scalars['BigInt']>;
  start_gt?: Maybe<Scalars['BigInt']>;
  start_lt?: Maybe<Scalars['BigInt']>;
  start_gte?: Maybe<Scalars['BigInt']>;
  start_lte?: Maybe<Scalars['BigInt']>;
  start_in?: Maybe<Array<Scalars['BigInt']>>;
  start_not_in?: Maybe<Array<Scalars['BigInt']>>;
  end?: Maybe<Scalars['BigInt']>;
  end_not?: Maybe<Scalars['BigInt']>;
  end_gt?: Maybe<Scalars['BigInt']>;
  end_lt?: Maybe<Scalars['BigInt']>;
  end_gte?: Maybe<Scalars['BigInt']>;
  end_lte?: Maybe<Scalars['BigInt']>;
  end_in?: Maybe<Array<Scalars['BigInt']>>;
  end_not_in?: Maybe<Array<Scalars['BigInt']>>;
  first?: Maybe<Scalars['String']>;
  first_not?: Maybe<Scalars['String']>;
  first_gt?: Maybe<Scalars['String']>;
  first_lt?: Maybe<Scalars['String']>;
  first_gte?: Maybe<Scalars['String']>;
  first_lte?: Maybe<Scalars['String']>;
  first_in?: Maybe<Array<Scalars['String']>>;
  first_not_in?: Maybe<Array<Scalars['String']>>;
  first_contains?: Maybe<Scalars['String']>;
  first_not_contains?: Maybe<Scalars['String']>;
  first_starts_with?: Maybe<Scalars['String']>;
  first_not_starts_with?: Maybe<Scalars['String']>;
  first_ends_with?: Maybe<Scalars['String']>;
  first_not_ends_with?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
  last_not?: Maybe<Scalars['String']>;
  last_gt?: Maybe<Scalars['String']>;
  last_lt?: Maybe<Scalars['String']>;
  last_gte?: Maybe<Scalars['String']>;
  last_lte?: Maybe<Scalars['String']>;
  last_in?: Maybe<Array<Scalars['String']>>;
  last_not_in?: Maybe<Array<Scalars['String']>>;
  last_contains?: Maybe<Scalars['String']>;
  last_not_contains?: Maybe<Scalars['String']>;
  last_starts_with?: Maybe<Scalars['String']>;
  last_not_starts_with?: Maybe<Scalars['String']>;
  last_ends_with?: Maybe<Scalars['String']>;
  last_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DailyFundState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Start = 'start',
  End = 'end',
  First = 'first',
  Last = 'last'
}

export type DailyPriceCandleGroup = {
  __typename?: 'DailyPriceCandleGroup';
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  assetCandles: Array<DailyAssetPriceCandle>;
  currencyCandles: Array<DailyCurrencyPriceCandle>;
};


export type DailyPriceCandleGroupAssetCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyAssetPriceCandle_Filter>;
};


export type DailyPriceCandleGroupCurrencyCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyCurrencyPriceCandle_Filter>;
};

export type DailyPriceCandleGroup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum DailyPriceCandleGroup_OrderBy {
  Id = 'id',
  From = 'from',
  To = 'to',
  AssetCandles = 'assetCandles',
  CurrencyCandles = 'currencyCandles'
}

export type DerivativeAddedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'DerivativeAddedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  derivative: Asset;
  priceFeed: Scalars['String'];
};

export type DerivativeAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  derivative?: Maybe<Scalars['String']>;
  derivative_not?: Maybe<Scalars['String']>;
  derivative_gt?: Maybe<Scalars['String']>;
  derivative_lt?: Maybe<Scalars['String']>;
  derivative_gte?: Maybe<Scalars['String']>;
  derivative_lte?: Maybe<Scalars['String']>;
  derivative_in?: Maybe<Array<Scalars['String']>>;
  derivative_not_in?: Maybe<Array<Scalars['String']>>;
  derivative_contains?: Maybe<Scalars['String']>;
  derivative_not_contains?: Maybe<Scalars['String']>;
  derivative_starts_with?: Maybe<Scalars['String']>;
  derivative_not_starts_with?: Maybe<Scalars['String']>;
  derivative_ends_with?: Maybe<Scalars['String']>;
  derivative_not_ends_with?: Maybe<Scalars['String']>;
  priceFeed?: Maybe<Scalars['String']>;
  priceFeed_not?: Maybe<Scalars['String']>;
  priceFeed_gt?: Maybe<Scalars['String']>;
  priceFeed_lt?: Maybe<Scalars['String']>;
  priceFeed_gte?: Maybe<Scalars['String']>;
  priceFeed_lte?: Maybe<Scalars['String']>;
  priceFeed_in?: Maybe<Array<Scalars['String']>>;
  priceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  priceFeed_contains?: Maybe<Scalars['String']>;
  priceFeed_not_contains?: Maybe<Scalars['String']>;
  priceFeed_starts_with?: Maybe<Scalars['String']>;
  priceFeed_not_starts_with?: Maybe<Scalars['String']>;
  priceFeed_ends_with?: Maybe<Scalars['String']>;
  priceFeed_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DerivativeAddedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Derivative = 'derivative',
  PriceFeed = 'priceFeed'
}

export type DerivativeRemovedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'DerivativeRemovedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  derivative: Asset;
};

export type DerivativeRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  derivative?: Maybe<Scalars['String']>;
  derivative_not?: Maybe<Scalars['String']>;
  derivative_gt?: Maybe<Scalars['String']>;
  derivative_lt?: Maybe<Scalars['String']>;
  derivative_gte?: Maybe<Scalars['String']>;
  derivative_lte?: Maybe<Scalars['String']>;
  derivative_in?: Maybe<Array<Scalars['String']>>;
  derivative_not_in?: Maybe<Array<Scalars['String']>>;
  derivative_contains?: Maybe<Scalars['String']>;
  derivative_not_contains?: Maybe<Scalars['String']>;
  derivative_starts_with?: Maybe<Scalars['String']>;
  derivative_not_starts_with?: Maybe<Scalars['String']>;
  derivative_ends_with?: Maybe<Scalars['String']>;
  derivative_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DerivativeRemovedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Derivative = 'derivative'
}

export enum DerivativeType {
  Compound = 'Compound',
  Chai = 'Chai',
  UniswapPool = 'UniswapPool',
  Synthetix = 'Synthetix'
}

export type DerivativeUpdatedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'DerivativeUpdatedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  derivative: Asset;
  prevPriceFeed: Scalars['String'];
  nextPriceFeed: Scalars['String'];
};

export type DerivativeUpdatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  derivative?: Maybe<Scalars['String']>;
  derivative_not?: Maybe<Scalars['String']>;
  derivative_gt?: Maybe<Scalars['String']>;
  derivative_lt?: Maybe<Scalars['String']>;
  derivative_gte?: Maybe<Scalars['String']>;
  derivative_lte?: Maybe<Scalars['String']>;
  derivative_in?: Maybe<Array<Scalars['String']>>;
  derivative_not_in?: Maybe<Array<Scalars['String']>>;
  derivative_contains?: Maybe<Scalars['String']>;
  derivative_not_contains?: Maybe<Scalars['String']>;
  derivative_starts_with?: Maybe<Scalars['String']>;
  derivative_not_starts_with?: Maybe<Scalars['String']>;
  derivative_ends_with?: Maybe<Scalars['String']>;
  derivative_not_ends_with?: Maybe<Scalars['String']>;
  prevPriceFeed?: Maybe<Scalars['String']>;
  prevPriceFeed_not?: Maybe<Scalars['String']>;
  prevPriceFeed_gt?: Maybe<Scalars['String']>;
  prevPriceFeed_lt?: Maybe<Scalars['String']>;
  prevPriceFeed_gte?: Maybe<Scalars['String']>;
  prevPriceFeed_lte?: Maybe<Scalars['String']>;
  prevPriceFeed_in?: Maybe<Array<Scalars['String']>>;
  prevPriceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  prevPriceFeed_contains?: Maybe<Scalars['String']>;
  prevPriceFeed_not_contains?: Maybe<Scalars['String']>;
  prevPriceFeed_starts_with?: Maybe<Scalars['String']>;
  prevPriceFeed_not_starts_with?: Maybe<Scalars['String']>;
  prevPriceFeed_ends_with?: Maybe<Scalars['String']>;
  prevPriceFeed_not_ends_with?: Maybe<Scalars['String']>;
  nextPriceFeed?: Maybe<Scalars['String']>;
  nextPriceFeed_not?: Maybe<Scalars['String']>;
  nextPriceFeed_gt?: Maybe<Scalars['String']>;
  nextPriceFeed_lt?: Maybe<Scalars['String']>;
  nextPriceFeed_gte?: Maybe<Scalars['String']>;
  nextPriceFeed_lte?: Maybe<Scalars['String']>;
  nextPriceFeed_in?: Maybe<Array<Scalars['String']>>;
  nextPriceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  nextPriceFeed_contains?: Maybe<Scalars['String']>;
  nextPriceFeed_not_contains?: Maybe<Scalars['String']>;
  nextPriceFeed_starts_with?: Maybe<Scalars['String']>;
  nextPriceFeed_not_starts_with?: Maybe<Scalars['String']>;
  nextPriceFeed_ends_with?: Maybe<Scalars['String']>;
  nextPriceFeed_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DerivativeUpdatedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Derivative = 'derivative',
  PrevPriceFeed = 'prevPriceFeed',
  NextPriceFeed = 'nextPriceFeed'
}

export type DispatcherOwnershipTransferredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'DispatcherOwnershipTransferredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevOwner: Scalars['String'];
  nextOwner: Scalars['String'];
};

export type DispatcherOwnershipTransferredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwner_not?: Maybe<Scalars['String']>;
  prevOwner_gt?: Maybe<Scalars['String']>;
  prevOwner_lt?: Maybe<Scalars['String']>;
  prevOwner_gte?: Maybe<Scalars['String']>;
  prevOwner_lte?: Maybe<Scalars['String']>;
  prevOwner_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_not_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_contains?: Maybe<Scalars['String']>;
  prevOwner_not_contains?: Maybe<Scalars['String']>;
  prevOwner_starts_with?: Maybe<Scalars['String']>;
  prevOwner_not_starts_with?: Maybe<Scalars['String']>;
  prevOwner_ends_with?: Maybe<Scalars['String']>;
  prevOwner_not_ends_with?: Maybe<Scalars['String']>;
  nextOwner?: Maybe<Scalars['String']>;
  nextOwner_not?: Maybe<Scalars['String']>;
  nextOwner_gt?: Maybe<Scalars['String']>;
  nextOwner_lt?: Maybe<Scalars['String']>;
  nextOwner_gte?: Maybe<Scalars['String']>;
  nextOwner_lte?: Maybe<Scalars['String']>;
  nextOwner_in?: Maybe<Array<Scalars['String']>>;
  nextOwner_not_in?: Maybe<Array<Scalars['String']>>;
  nextOwner_contains?: Maybe<Scalars['String']>;
  nextOwner_not_contains?: Maybe<Scalars['String']>;
  nextOwner_starts_with?: Maybe<Scalars['String']>;
  nextOwner_not_starts_with?: Maybe<Scalars['String']>;
  nextOwner_ends_with?: Maybe<Scalars['String']>;
  nextOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum DispatcherOwnershipTransferredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevOwner = 'prevOwner',
  NextOwner = 'nextOwner'
}

export type EntranceRateBurnFeeSetting = FeeSettingInterface & {
  __typename?: 'EntranceRateBurnFeeSetting';
  id: Scalars['ID'];
  fee: Fee;
  fund: Fund;
  rate: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type EntranceRateBurnFeeSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type EntranceRateBurnFeeSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum EntranceRateBurnFeeSetting_OrderBy {
  Id = 'id',
  Fee = 'fee',
  Fund = 'fund',
  Rate = 'rate',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type EntranceRateBurnFeeSettingsAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'EntranceRateBurnFeeSettingsAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  rate: Scalars['BigDecimal'];
};

export type EntranceRateBurnFeeSettingsAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum EntranceRateBurnFeeSettingsAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Rate = 'rate'
}

export type EntranceRateBurnFeeSettledEvent = EventInterface & FundEventInterface & {
  __typename?: 'EntranceRateBurnFeeSettledEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  sharesQuantity: Scalars['BigDecimal'];
  payer: Account;
};

export type EntranceRateBurnFeeSettledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  sharesQuantity?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_not?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesQuantity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  payer?: Maybe<Scalars['String']>;
  payer_not?: Maybe<Scalars['String']>;
  payer_gt?: Maybe<Scalars['String']>;
  payer_lt?: Maybe<Scalars['String']>;
  payer_gte?: Maybe<Scalars['String']>;
  payer_lte?: Maybe<Scalars['String']>;
  payer_in?: Maybe<Array<Scalars['String']>>;
  payer_not_in?: Maybe<Array<Scalars['String']>>;
  payer_contains?: Maybe<Scalars['String']>;
  payer_not_contains?: Maybe<Scalars['String']>;
  payer_starts_with?: Maybe<Scalars['String']>;
  payer_not_starts_with?: Maybe<Scalars['String']>;
  payer_ends_with?: Maybe<Scalars['String']>;
  payer_not_ends_with?: Maybe<Scalars['String']>;
};

export enum EntranceRateBurnFeeSettledEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  SharesQuantity = 'sharesQuantity',
  Payer = 'payer'
}

export type EntranceRateBurnFeeState = FundStateInterface & IndividualFeeStateInterface & {
  __typename?: 'EntranceRateBurnFeeState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  fee: Fee;
  lastSettled: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type EntranceRateBurnFeeStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type EntranceRateBurnFeeState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  lastSettled?: Maybe<Scalars['BigInt']>;
  lastSettled_not?: Maybe<Scalars['BigInt']>;
  lastSettled_gt?: Maybe<Scalars['BigInt']>;
  lastSettled_lt?: Maybe<Scalars['BigInt']>;
  lastSettled_gte?: Maybe<Scalars['BigInt']>;
  lastSettled_lte?: Maybe<Scalars['BigInt']>;
  lastSettled_in?: Maybe<Array<Scalars['BigInt']>>;
  lastSettled_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum EntranceRateBurnFeeState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Fee = 'fee',
  LastSettled = 'lastSettled',
  Events = 'events'
}

export type EntranceRateDirectFeeSetting = FeeSettingInterface & {
  __typename?: 'EntranceRateDirectFeeSetting';
  id: Scalars['ID'];
  fee: Fee;
  fund: Fund;
  rate: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type EntranceRateDirectFeeSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type EntranceRateDirectFeeSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum EntranceRateDirectFeeSetting_OrderBy {
  Id = 'id',
  Fee = 'fee',
  Fund = 'fund',
  Rate = 'rate',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type EntranceRateDirectFeeSettingsAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'EntranceRateDirectFeeSettingsAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  rate: Scalars['BigDecimal'];
};

export type EntranceRateDirectFeeSettingsAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum EntranceRateDirectFeeSettingsAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Rate = 'rate'
}

export type EntranceRateDirectFeeSettledEvent = EventInterface & FundEventInterface & {
  __typename?: 'EntranceRateDirectFeeSettledEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  sharesQuantity: Scalars['BigDecimal'];
  payer: Account;
};

export type EntranceRateDirectFeeSettledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  sharesQuantity?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_not?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesQuantity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  payer?: Maybe<Scalars['String']>;
  payer_not?: Maybe<Scalars['String']>;
  payer_gt?: Maybe<Scalars['String']>;
  payer_lt?: Maybe<Scalars['String']>;
  payer_gte?: Maybe<Scalars['String']>;
  payer_lte?: Maybe<Scalars['String']>;
  payer_in?: Maybe<Array<Scalars['String']>>;
  payer_not_in?: Maybe<Array<Scalars['String']>>;
  payer_contains?: Maybe<Scalars['String']>;
  payer_not_contains?: Maybe<Scalars['String']>;
  payer_starts_with?: Maybe<Scalars['String']>;
  payer_not_starts_with?: Maybe<Scalars['String']>;
  payer_ends_with?: Maybe<Scalars['String']>;
  payer_not_ends_with?: Maybe<Scalars['String']>;
};

export enum EntranceRateDirectFeeSettledEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  SharesQuantity = 'sharesQuantity',
  Payer = 'payer'
}

export type EntranceRateDirectFeeState = FundStateInterface & IndividualFeeStateInterface & {
  __typename?: 'EntranceRateDirectFeeState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  fee: Fee;
  lastSettled: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type EntranceRateDirectFeeStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type EntranceRateDirectFeeState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  lastSettled?: Maybe<Scalars['BigInt']>;
  lastSettled_not?: Maybe<Scalars['BigInt']>;
  lastSettled_gt?: Maybe<Scalars['BigInt']>;
  lastSettled_lt?: Maybe<Scalars['BigInt']>;
  lastSettled_gte?: Maybe<Scalars['BigInt']>;
  lastSettled_lte?: Maybe<Scalars['BigInt']>;
  lastSettled_in?: Maybe<Array<Scalars['BigInt']>>;
  lastSettled_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum EntranceRateDirectFeeState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Fee = 'fee',
  LastSettled = 'lastSettled',
  Events = 'events'
}

export type EthUsdAggregatorSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'EthUsdAggregatorSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevEthUsdAggregator: Scalars['String'];
  nextEthUsdAggregator: Scalars['String'];
};

export type EthUsdAggregatorSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevEthUsdAggregator?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_not?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_gt?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_lt?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_gte?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_lte?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_in?: Maybe<Array<Scalars['String']>>;
  prevEthUsdAggregator_not_in?: Maybe<Array<Scalars['String']>>;
  prevEthUsdAggregator_contains?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_not_contains?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_starts_with?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_not_starts_with?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_ends_with?: Maybe<Scalars['String']>;
  prevEthUsdAggregator_not_ends_with?: Maybe<Scalars['String']>;
  nextEthUsdAggregator?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_not?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_gt?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_lt?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_gte?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_lte?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_in?: Maybe<Array<Scalars['String']>>;
  nextEthUsdAggregator_not_in?: Maybe<Array<Scalars['String']>>;
  nextEthUsdAggregator_contains?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_not_contains?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_starts_with?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_not_starts_with?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_ends_with?: Maybe<Scalars['String']>;
  nextEthUsdAggregator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum EthUsdAggregatorSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevEthUsdAggregator = 'prevEthUsdAggregator',
  NextEthUsdAggregator = 'nextEthUsdAggregator'
}

export type EventInterface = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type EventInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum EventInterface_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Fee = {
  __typename?: 'Fee';
  id: Scalars['ID'];
  feeManager: FeeManager;
  identifier: Scalars['String'];
  settings: Array<FeeSettingInterface>;
};


export type FeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettingInterface_Filter>;
};

export type FeeDeregisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'FeeDeregisteredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  fee: Fee;
  identifier: Scalars['String'];
};

export type FeeDeregisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FeeDeregisteredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Fee = 'fee',
  Identifier = 'identifier'
}

export type FeeEnabledForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'FeeEnabledForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  fee: Fee;
  comptrollerProxy: Scalars['String'];
  settingsData: Scalars['Bytes'];
};

export type FeeEnabledForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  settingsData?: Maybe<Scalars['Bytes']>;
  settingsData_not?: Maybe<Scalars['Bytes']>;
  settingsData_in?: Maybe<Array<Scalars['Bytes']>>;
  settingsData_not_in?: Maybe<Array<Scalars['Bytes']>>;
  settingsData_contains?: Maybe<Scalars['Bytes']>;
  settingsData_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum FeeEnabledForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Fee = 'fee',
  ComptrollerProxy = 'comptrollerProxy',
  SettingsData = 'settingsData'
}

export enum FeeHook {
  Continuous = 'Continuous',
  BuySharesSetup = 'BuySharesSetup',
  PreBuyShares = 'PreBuyShares',
  PostBuyShares = 'PostBuyShares',
  BuySharesCompleted = 'BuySharesCompleted',
  PreRedeemShares = 'PreRedeemShares'
}

export type FeeManager = {
  __typename?: 'FeeManager';
  id: Scalars['ID'];
  fees: Array<Fee>;
};


export type FeeManagerFeesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fee_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fee_Filter>;
};

export type FeeManager_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum FeeManager_OrderBy {
  Id = 'id',
  Fees = 'fees'
}

export type FeeRegisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'FeeRegisteredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  fee: Fee;
  identifier: Scalars['String'];
  implementedHooksForSettle: Array<FeeHook>;
  implementedHooksForUpdate: Array<FeeHook>;
  usesGavOnSettle: Scalars['Boolean'];
  usesGavOnUpdate: Scalars['Boolean'];
};

export type FeeRegisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  implementedHooksForSettle?: Maybe<Array<FeeHook>>;
  implementedHooksForSettle_not?: Maybe<Array<FeeHook>>;
  implementedHooksForSettle_contains?: Maybe<Array<FeeHook>>;
  implementedHooksForSettle_not_contains?: Maybe<Array<FeeHook>>;
  implementedHooksForUpdate?: Maybe<Array<FeeHook>>;
  implementedHooksForUpdate_not?: Maybe<Array<FeeHook>>;
  implementedHooksForUpdate_contains?: Maybe<Array<FeeHook>>;
  implementedHooksForUpdate_not_contains?: Maybe<Array<FeeHook>>;
  usesGavOnSettle?: Maybe<Scalars['Boolean']>;
  usesGavOnSettle_not?: Maybe<Scalars['Boolean']>;
  usesGavOnSettle_in?: Maybe<Array<Scalars['Boolean']>>;
  usesGavOnSettle_not_in?: Maybe<Array<Scalars['Boolean']>>;
  usesGavOnUpdate?: Maybe<Scalars['Boolean']>;
  usesGavOnUpdate_not?: Maybe<Scalars['Boolean']>;
  usesGavOnUpdate_in?: Maybe<Array<Scalars['Boolean']>>;
  usesGavOnUpdate_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum FeeRegisteredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Fee = 'fee',
  Identifier = 'identifier',
  ImplementedHooksForSettle = 'implementedHooksForSettle',
  ImplementedHooksForUpdate = 'implementedHooksForUpdate',
  UsesGavOnSettle = 'usesGavOnSettle',
  UsesGavOnUpdate = 'usesGavOnUpdate'
}

export type FeeSettingInterface = {
  id: Scalars['ID'];
  fee: Fee;
  fund: Fund;
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type FeeSettingInterfaceEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type FeeSettingInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum FeeSettingInterface_OrderBy {
  Id = 'id',
  Fee = 'fee',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type FeeSettledForFundEvent = EventInterface & FundEventInterface & SharesChangeInterface & FeeSharesChangeInterface & {
  __typename?: 'FeeSettledForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  type: ShareChangeType;
  account: Account;
  investor: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  comptrollerProxy: Scalars['String'];
  fee: Fee;
  payer: Scalars['String'];
  payee: Scalars['String'];
  settlementType: SettlementType;
  sharesDue: Scalars['BigDecimal'];
  calculations: CalculationState;
  fundState: FundState;
};

export type FeeSettledForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  payer?: Maybe<Scalars['String']>;
  payer_not?: Maybe<Scalars['String']>;
  payer_gt?: Maybe<Scalars['String']>;
  payer_lt?: Maybe<Scalars['String']>;
  payer_gte?: Maybe<Scalars['String']>;
  payer_lte?: Maybe<Scalars['String']>;
  payer_in?: Maybe<Array<Scalars['String']>>;
  payer_not_in?: Maybe<Array<Scalars['String']>>;
  payer_contains?: Maybe<Scalars['String']>;
  payer_not_contains?: Maybe<Scalars['String']>;
  payer_starts_with?: Maybe<Scalars['String']>;
  payer_not_starts_with?: Maybe<Scalars['String']>;
  payer_ends_with?: Maybe<Scalars['String']>;
  payer_not_ends_with?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  payee_not?: Maybe<Scalars['String']>;
  payee_gt?: Maybe<Scalars['String']>;
  payee_lt?: Maybe<Scalars['String']>;
  payee_gte?: Maybe<Scalars['String']>;
  payee_lte?: Maybe<Scalars['String']>;
  payee_in?: Maybe<Array<Scalars['String']>>;
  payee_not_in?: Maybe<Array<Scalars['String']>>;
  payee_contains?: Maybe<Scalars['String']>;
  payee_not_contains?: Maybe<Scalars['String']>;
  payee_starts_with?: Maybe<Scalars['String']>;
  payee_not_starts_with?: Maybe<Scalars['String']>;
  payee_ends_with?: Maybe<Scalars['String']>;
  payee_not_ends_with?: Maybe<Scalars['String']>;
  settlementType?: Maybe<SettlementType>;
  settlementType_not?: Maybe<SettlementType>;
  sharesDue?: Maybe<Scalars['BigDecimal']>;
  sharesDue_not?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FeeSettledForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Type = 'type',
  Account = 'account',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  ComptrollerProxy = 'comptrollerProxy',
  Fee = 'fee',
  Payer = 'payer',
  Payee = 'payee',
  SettlementType = 'settlementType',
  SharesDue = 'sharesDue',
  Calculations = 'calculations',
  FundState = 'fundState'
}

export type FeeSharesChangeInterface = {
  id: Scalars['ID'];
  fund: Fund;
  investor: Account;
  timestamp: Scalars['BigInt'];
  type: ShareChangeType;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  fundState: FundState;
  transaction: Transaction;
  calculations: CalculationState;
};

export type FeeSharesChangeInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FeeSharesChangeInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Type = 'type',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  FundState = 'fundState',
  Transaction = 'transaction',
  Calculations = 'calculations'
}

export type FeeState = FundStateInterface & {
  __typename?: 'FeeState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  feeStates: Array<IndividualFeeStateInterface>;
  events: Array<FundEventInterface>;
};


export type FeeStateFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IndividualFeeStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IndividualFeeStateInterface_Filter>;
};


export type FeeStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type FeeState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  feeStates?: Maybe<Array<Scalars['String']>>;
  feeStates_not?: Maybe<Array<Scalars['String']>>;
  feeStates_contains?: Maybe<Array<Scalars['String']>>;
  feeStates_not_contains?: Maybe<Array<Scalars['String']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum FeeState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  FeeStates = 'feeStates',
  Events = 'events'
}

export type Fee_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  feeManager?: Maybe<Scalars['String']>;
  feeManager_not?: Maybe<Scalars['String']>;
  feeManager_gt?: Maybe<Scalars['String']>;
  feeManager_lt?: Maybe<Scalars['String']>;
  feeManager_gte?: Maybe<Scalars['String']>;
  feeManager_lte?: Maybe<Scalars['String']>;
  feeManager_in?: Maybe<Array<Scalars['String']>>;
  feeManager_not_in?: Maybe<Array<Scalars['String']>>;
  feeManager_contains?: Maybe<Scalars['String']>;
  feeManager_not_contains?: Maybe<Scalars['String']>;
  feeManager_starts_with?: Maybe<Scalars['String']>;
  feeManager_not_starts_with?: Maybe<Scalars['String']>;
  feeManager_ends_with?: Maybe<Scalars['String']>;
  feeManager_not_ends_with?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Fee_OrderBy {
  Id = 'id',
  FeeManager = 'feeManager',
  Identifier = 'identifier',
  Settings = 'settings'
}

export type FeesRecipientSetForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'FeesRecipientSetForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  prevFeesRecipient: Scalars['String'];
  nextFeesRecipient: Scalars['String'];
};

export type FeesRecipientSetForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevFeesRecipient?: Maybe<Scalars['String']>;
  prevFeesRecipient_not?: Maybe<Scalars['String']>;
  prevFeesRecipient_gt?: Maybe<Scalars['String']>;
  prevFeesRecipient_lt?: Maybe<Scalars['String']>;
  prevFeesRecipient_gte?: Maybe<Scalars['String']>;
  prevFeesRecipient_lte?: Maybe<Scalars['String']>;
  prevFeesRecipient_in?: Maybe<Array<Scalars['String']>>;
  prevFeesRecipient_not_in?: Maybe<Array<Scalars['String']>>;
  prevFeesRecipient_contains?: Maybe<Scalars['String']>;
  prevFeesRecipient_not_contains?: Maybe<Scalars['String']>;
  prevFeesRecipient_starts_with?: Maybe<Scalars['String']>;
  prevFeesRecipient_not_starts_with?: Maybe<Scalars['String']>;
  prevFeesRecipient_ends_with?: Maybe<Scalars['String']>;
  prevFeesRecipient_not_ends_with?: Maybe<Scalars['String']>;
  nextFeesRecipient?: Maybe<Scalars['String']>;
  nextFeesRecipient_not?: Maybe<Scalars['String']>;
  nextFeesRecipient_gt?: Maybe<Scalars['String']>;
  nextFeesRecipient_lt?: Maybe<Scalars['String']>;
  nextFeesRecipient_gte?: Maybe<Scalars['String']>;
  nextFeesRecipient_lte?: Maybe<Scalars['String']>;
  nextFeesRecipient_in?: Maybe<Array<Scalars['String']>>;
  nextFeesRecipient_not_in?: Maybe<Array<Scalars['String']>>;
  nextFeesRecipient_contains?: Maybe<Scalars['String']>;
  nextFeesRecipient_not_contains?: Maybe<Scalars['String']>;
  nextFeesRecipient_starts_with?: Maybe<Scalars['String']>;
  nextFeesRecipient_not_starts_with?: Maybe<Scalars['String']>;
  nextFeesRecipient_ends_with?: Maybe<Scalars['String']>;
  nextFeesRecipient_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FeesRecipientSetForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  PrevFeesRecipient = 'prevFeesRecipient',
  NextFeesRecipient = 'nextFeesRecipient'
}

export type Fund = {
  __typename?: 'Fund';
  id: Scalars['ID'];
  accessor: Scalars['String'];
  name: Scalars['String'];
  inception: Scalars['BigInt'];
  creator: Account;
  release: Release;
  manager: Account;
  migrator?: Maybe<Scalars['String']>;
  denominationAsset: Asset;
  sharesActionTimelock: Scalars['BigInt'];
  lastKnowGavInEth?: Maybe<Scalars['BigDecimal']>;
  policies: Array<PolicySettingInterface>;
  fees: Array<FeeSettingInterface>;
  trackedAssets: Array<Asset>;
  trades: Array<Trade>;
  authUsers: Array<Account>;
  investments: Array<Investment>;
  investmentCount: Scalars['Int'];
  sharesChanges: Array<SharesChangeInterface>;
  feeSharesChanges: Array<FeeSharesChangeInterface>;
  investmentSharesChanges: Array<InvestmentSharesChangeInterface>;
  shares: ShareState;
  sharesHistory: Array<ShareState>;
  portfolio: PortfolioState;
  portfolioHistory: Array<PortfolioState>;
  feeState: FeeState;
  feeStateHistory: Array<FeeState>;
  calculations: CalculationState;
  calculationsHistory: Array<CalculationState>;
  state: FundState;
  stateHistory: Array<FundState>;
  firstInvestmentState?: Maybe<FundState>;
  hourlyStates: Array<HourlyFundState>;
  dailyStates: Array<DailyFundState>;
  monthlyStates: Array<MonthlyFundState>;
  events: Array<FundEventInterface>;
  migrations?: Maybe<Array<Migration>>;
};


export type FundPoliciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicySettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicySettingInterface_Filter>;
};


export type FundFeesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettingInterface_Filter>;
};


export type FundTrackedAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
};


export type FundTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Trade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Trade_Filter>;
};


export type FundAuthUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
};


export type FundInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
};


export type FundSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesChangeInterface_Filter>;
};


export type FundFeeSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSharesChangeInterface_Filter>;
};


export type FundInvestmentSharesChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentSharesChangeInterface_Filter>;
};


export type FundSharesHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ShareState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ShareState_Filter>;
};


export type FundPortfolioHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PortfolioState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PortfolioState_Filter>;
};


export type FundFeeStateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeState_Filter>;
};


export type FundCalculationsHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CalculationState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CalculationState_Filter>;
};


export type FundStateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundState_Filter>;
};


export type FundHourlyStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyFundState_Filter>;
};


export type FundDailyStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyFundState_Filter>;
};


export type FundMonthlyStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyFundState_Filter>;
};


export type FundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};


export type FundMigrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Migration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Migration_Filter>;
};

export type FundDeployerSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'FundDeployerSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  nextFundDeployer: Scalars['String'];
  prevFundDeployer?: Maybe<Scalars['String']>;
};

export type FundDeployerSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer?: Maybe<Scalars['String']>;
  nextFundDeployer_not?: Maybe<Scalars['String']>;
  nextFundDeployer_gt?: Maybe<Scalars['String']>;
  nextFundDeployer_lt?: Maybe<Scalars['String']>;
  nextFundDeployer_gte?: Maybe<Scalars['String']>;
  nextFundDeployer_lte?: Maybe<Scalars['String']>;
  nextFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_not_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer?: Maybe<Scalars['String']>;
  prevFundDeployer_not?: Maybe<Scalars['String']>;
  prevFundDeployer_gt?: Maybe<Scalars['String']>;
  prevFundDeployer_lt?: Maybe<Scalars['String']>;
  prevFundDeployer_gte?: Maybe<Scalars['String']>;
  prevFundDeployer_lte?: Maybe<Scalars['String']>;
  prevFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_not_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FundDeployerSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  NextFundDeployer = 'nextFundDeployer',
  PrevFundDeployer = 'prevFundDeployer'
}

export type FundEventInterface = {
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type FundEventInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FundEventInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type FundState = FundStateInterface & {
  __typename?: 'FundState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  shares: ShareState;
  portfolio: PortfolioState;
  feeState: FeeState;
  calculations: CalculationState;
  currencyPrices: Array<CurrencyPrice>;
  investmentCount: Scalars['Int'];
  events: Array<FundEventInterface>;
};


export type FundStateCurrencyPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CurrencyPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CurrencyPrice_Filter>;
};


export type FundStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type FundStateInterface = {
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type FundStateInterfaceEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type FundStateInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum FundStateInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type FundState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  shares?: Maybe<Scalars['String']>;
  shares_not?: Maybe<Scalars['String']>;
  shares_gt?: Maybe<Scalars['String']>;
  shares_lt?: Maybe<Scalars['String']>;
  shares_gte?: Maybe<Scalars['String']>;
  shares_lte?: Maybe<Scalars['String']>;
  shares_in?: Maybe<Array<Scalars['String']>>;
  shares_not_in?: Maybe<Array<Scalars['String']>>;
  shares_contains?: Maybe<Scalars['String']>;
  shares_not_contains?: Maybe<Scalars['String']>;
  shares_starts_with?: Maybe<Scalars['String']>;
  shares_not_starts_with?: Maybe<Scalars['String']>;
  shares_ends_with?: Maybe<Scalars['String']>;
  shares_not_ends_with?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  portfolio_not?: Maybe<Scalars['String']>;
  portfolio_gt?: Maybe<Scalars['String']>;
  portfolio_lt?: Maybe<Scalars['String']>;
  portfolio_gte?: Maybe<Scalars['String']>;
  portfolio_lte?: Maybe<Scalars['String']>;
  portfolio_in?: Maybe<Array<Scalars['String']>>;
  portfolio_not_in?: Maybe<Array<Scalars['String']>>;
  portfolio_contains?: Maybe<Scalars['String']>;
  portfolio_not_contains?: Maybe<Scalars['String']>;
  portfolio_starts_with?: Maybe<Scalars['String']>;
  portfolio_not_starts_with?: Maybe<Scalars['String']>;
  portfolio_ends_with?: Maybe<Scalars['String']>;
  portfolio_not_ends_with?: Maybe<Scalars['String']>;
  feeState?: Maybe<Scalars['String']>;
  feeState_not?: Maybe<Scalars['String']>;
  feeState_gt?: Maybe<Scalars['String']>;
  feeState_lt?: Maybe<Scalars['String']>;
  feeState_gte?: Maybe<Scalars['String']>;
  feeState_lte?: Maybe<Scalars['String']>;
  feeState_in?: Maybe<Array<Scalars['String']>>;
  feeState_not_in?: Maybe<Array<Scalars['String']>>;
  feeState_contains?: Maybe<Scalars['String']>;
  feeState_not_contains?: Maybe<Scalars['String']>;
  feeState_starts_with?: Maybe<Scalars['String']>;
  feeState_not_starts_with?: Maybe<Scalars['String']>;
  feeState_ends_with?: Maybe<Scalars['String']>;
  feeState_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
  currencyPrices?: Maybe<Array<Scalars['String']>>;
  currencyPrices_not?: Maybe<Array<Scalars['String']>>;
  currencyPrices_contains?: Maybe<Array<Scalars['String']>>;
  currencyPrices_not_contains?: Maybe<Array<Scalars['String']>>;
  investmentCount?: Maybe<Scalars['Int']>;
  investmentCount_not?: Maybe<Scalars['Int']>;
  investmentCount_gt?: Maybe<Scalars['Int']>;
  investmentCount_lt?: Maybe<Scalars['Int']>;
  investmentCount_gte?: Maybe<Scalars['Int']>;
  investmentCount_lte?: Maybe<Scalars['Int']>;
  investmentCount_in?: Maybe<Array<Scalars['Int']>>;
  investmentCount_not_in?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum FundState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Shares = 'shares',
  Portfolio = 'portfolio',
  FeeState = 'feeState',
  Calculations = 'calculations',
  CurrencyPrices = 'currencyPrices',
  InvestmentCount = 'investmentCount',
  Events = 'events'
}

export type Fund_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  accessor?: Maybe<Scalars['String']>;
  accessor_not?: Maybe<Scalars['String']>;
  accessor_gt?: Maybe<Scalars['String']>;
  accessor_lt?: Maybe<Scalars['String']>;
  accessor_gte?: Maybe<Scalars['String']>;
  accessor_lte?: Maybe<Scalars['String']>;
  accessor_in?: Maybe<Array<Scalars['String']>>;
  accessor_not_in?: Maybe<Array<Scalars['String']>>;
  accessor_contains?: Maybe<Scalars['String']>;
  accessor_not_contains?: Maybe<Scalars['String']>;
  accessor_starts_with?: Maybe<Scalars['String']>;
  accessor_not_starts_with?: Maybe<Scalars['String']>;
  accessor_ends_with?: Maybe<Scalars['String']>;
  accessor_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  inception?: Maybe<Scalars['BigInt']>;
  inception_not?: Maybe<Scalars['BigInt']>;
  inception_gt?: Maybe<Scalars['BigInt']>;
  inception_lt?: Maybe<Scalars['BigInt']>;
  inception_gte?: Maybe<Scalars['BigInt']>;
  inception_lte?: Maybe<Scalars['BigInt']>;
  inception_in?: Maybe<Array<Scalars['BigInt']>>;
  inception_not_in?: Maybe<Array<Scalars['BigInt']>>;
  creator?: Maybe<Scalars['String']>;
  creator_not?: Maybe<Scalars['String']>;
  creator_gt?: Maybe<Scalars['String']>;
  creator_lt?: Maybe<Scalars['String']>;
  creator_gte?: Maybe<Scalars['String']>;
  creator_lte?: Maybe<Scalars['String']>;
  creator_in?: Maybe<Array<Scalars['String']>>;
  creator_not_in?: Maybe<Array<Scalars['String']>>;
  creator_contains?: Maybe<Scalars['String']>;
  creator_not_contains?: Maybe<Scalars['String']>;
  creator_starts_with?: Maybe<Scalars['String']>;
  creator_not_starts_with?: Maybe<Scalars['String']>;
  creator_ends_with?: Maybe<Scalars['String']>;
  creator_not_ends_with?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['String']>;
  release_not?: Maybe<Scalars['String']>;
  release_gt?: Maybe<Scalars['String']>;
  release_lt?: Maybe<Scalars['String']>;
  release_gte?: Maybe<Scalars['String']>;
  release_lte?: Maybe<Scalars['String']>;
  release_in?: Maybe<Array<Scalars['String']>>;
  release_not_in?: Maybe<Array<Scalars['String']>>;
  release_contains?: Maybe<Scalars['String']>;
  release_not_contains?: Maybe<Scalars['String']>;
  release_starts_with?: Maybe<Scalars['String']>;
  release_not_starts_with?: Maybe<Scalars['String']>;
  release_ends_with?: Maybe<Scalars['String']>;
  release_not_ends_with?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  manager_not?: Maybe<Scalars['String']>;
  manager_gt?: Maybe<Scalars['String']>;
  manager_lt?: Maybe<Scalars['String']>;
  manager_gte?: Maybe<Scalars['String']>;
  manager_lte?: Maybe<Scalars['String']>;
  manager_in?: Maybe<Array<Scalars['String']>>;
  manager_not_in?: Maybe<Array<Scalars['String']>>;
  manager_contains?: Maybe<Scalars['String']>;
  manager_not_contains?: Maybe<Scalars['String']>;
  manager_starts_with?: Maybe<Scalars['String']>;
  manager_not_starts_with?: Maybe<Scalars['String']>;
  manager_ends_with?: Maybe<Scalars['String']>;
  manager_not_ends_with?: Maybe<Scalars['String']>;
  migrator?: Maybe<Scalars['String']>;
  migrator_not?: Maybe<Scalars['String']>;
  migrator_gt?: Maybe<Scalars['String']>;
  migrator_lt?: Maybe<Scalars['String']>;
  migrator_gte?: Maybe<Scalars['String']>;
  migrator_lte?: Maybe<Scalars['String']>;
  migrator_in?: Maybe<Array<Scalars['String']>>;
  migrator_not_in?: Maybe<Array<Scalars['String']>>;
  migrator_contains?: Maybe<Scalars['String']>;
  migrator_not_contains?: Maybe<Scalars['String']>;
  migrator_starts_with?: Maybe<Scalars['String']>;
  migrator_not_starts_with?: Maybe<Scalars['String']>;
  migrator_ends_with?: Maybe<Scalars['String']>;
  migrator_not_ends_with?: Maybe<Scalars['String']>;
  denominationAsset?: Maybe<Scalars['String']>;
  denominationAsset_not?: Maybe<Scalars['String']>;
  denominationAsset_gt?: Maybe<Scalars['String']>;
  denominationAsset_lt?: Maybe<Scalars['String']>;
  denominationAsset_gte?: Maybe<Scalars['String']>;
  denominationAsset_lte?: Maybe<Scalars['String']>;
  denominationAsset_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_not_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_contains?: Maybe<Scalars['String']>;
  denominationAsset_not_contains?: Maybe<Scalars['String']>;
  denominationAsset_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_not_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_ends_with?: Maybe<Scalars['String']>;
  denominationAsset_not_ends_with?: Maybe<Scalars['String']>;
  sharesActionTimelock?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_not?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_in?: Maybe<Array<Scalars['BigInt']>>;
  sharesActionTimelock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lastKnowGavInEth?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_not?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_gt?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_lt?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_gte?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_lte?: Maybe<Scalars['BigDecimal']>;
  lastKnowGavInEth_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lastKnowGavInEth_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  trackedAssets?: Maybe<Array<Scalars['String']>>;
  trackedAssets_not?: Maybe<Array<Scalars['String']>>;
  trackedAssets_contains?: Maybe<Array<Scalars['String']>>;
  trackedAssets_not_contains?: Maybe<Array<Scalars['String']>>;
  authUsers?: Maybe<Array<Scalars['String']>>;
  authUsers_not?: Maybe<Array<Scalars['String']>>;
  authUsers_contains?: Maybe<Array<Scalars['String']>>;
  authUsers_not_contains?: Maybe<Array<Scalars['String']>>;
  investmentCount?: Maybe<Scalars['Int']>;
  investmentCount_not?: Maybe<Scalars['Int']>;
  investmentCount_gt?: Maybe<Scalars['Int']>;
  investmentCount_lt?: Maybe<Scalars['Int']>;
  investmentCount_gte?: Maybe<Scalars['Int']>;
  investmentCount_lte?: Maybe<Scalars['Int']>;
  investmentCount_in?: Maybe<Array<Scalars['Int']>>;
  investmentCount_not_in?: Maybe<Array<Scalars['Int']>>;
  shares?: Maybe<Scalars['String']>;
  shares_not?: Maybe<Scalars['String']>;
  shares_gt?: Maybe<Scalars['String']>;
  shares_lt?: Maybe<Scalars['String']>;
  shares_gte?: Maybe<Scalars['String']>;
  shares_lte?: Maybe<Scalars['String']>;
  shares_in?: Maybe<Array<Scalars['String']>>;
  shares_not_in?: Maybe<Array<Scalars['String']>>;
  shares_contains?: Maybe<Scalars['String']>;
  shares_not_contains?: Maybe<Scalars['String']>;
  shares_starts_with?: Maybe<Scalars['String']>;
  shares_not_starts_with?: Maybe<Scalars['String']>;
  shares_ends_with?: Maybe<Scalars['String']>;
  shares_not_ends_with?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  portfolio_not?: Maybe<Scalars['String']>;
  portfolio_gt?: Maybe<Scalars['String']>;
  portfolio_lt?: Maybe<Scalars['String']>;
  portfolio_gte?: Maybe<Scalars['String']>;
  portfolio_lte?: Maybe<Scalars['String']>;
  portfolio_in?: Maybe<Array<Scalars['String']>>;
  portfolio_not_in?: Maybe<Array<Scalars['String']>>;
  portfolio_contains?: Maybe<Scalars['String']>;
  portfolio_not_contains?: Maybe<Scalars['String']>;
  portfolio_starts_with?: Maybe<Scalars['String']>;
  portfolio_not_starts_with?: Maybe<Scalars['String']>;
  portfolio_ends_with?: Maybe<Scalars['String']>;
  portfolio_not_ends_with?: Maybe<Scalars['String']>;
  feeState?: Maybe<Scalars['String']>;
  feeState_not?: Maybe<Scalars['String']>;
  feeState_gt?: Maybe<Scalars['String']>;
  feeState_lt?: Maybe<Scalars['String']>;
  feeState_gte?: Maybe<Scalars['String']>;
  feeState_lte?: Maybe<Scalars['String']>;
  feeState_in?: Maybe<Array<Scalars['String']>>;
  feeState_not_in?: Maybe<Array<Scalars['String']>>;
  feeState_contains?: Maybe<Scalars['String']>;
  feeState_not_contains?: Maybe<Scalars['String']>;
  feeState_starts_with?: Maybe<Scalars['String']>;
  feeState_not_starts_with?: Maybe<Scalars['String']>;
  feeState_ends_with?: Maybe<Scalars['String']>;
  feeState_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
  firstInvestmentState?: Maybe<Scalars['String']>;
  firstInvestmentState_not?: Maybe<Scalars['String']>;
  firstInvestmentState_gt?: Maybe<Scalars['String']>;
  firstInvestmentState_lt?: Maybe<Scalars['String']>;
  firstInvestmentState_gte?: Maybe<Scalars['String']>;
  firstInvestmentState_lte?: Maybe<Scalars['String']>;
  firstInvestmentState_in?: Maybe<Array<Scalars['String']>>;
  firstInvestmentState_not_in?: Maybe<Array<Scalars['String']>>;
  firstInvestmentState_contains?: Maybe<Scalars['String']>;
  firstInvestmentState_not_contains?: Maybe<Scalars['String']>;
  firstInvestmentState_starts_with?: Maybe<Scalars['String']>;
  firstInvestmentState_not_starts_with?: Maybe<Scalars['String']>;
  firstInvestmentState_ends_with?: Maybe<Scalars['String']>;
  firstInvestmentState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Fund_OrderBy {
  Id = 'id',
  Accessor = 'accessor',
  Name = 'name',
  Inception = 'inception',
  Creator = 'creator',
  Release = 'release',
  Manager = 'manager',
  Migrator = 'migrator',
  DenominationAsset = 'denominationAsset',
  SharesActionTimelock = 'sharesActionTimelock',
  LastKnowGavInEth = 'lastKnowGavInEth',
  Policies = 'policies',
  Fees = 'fees',
  TrackedAssets = 'trackedAssets',
  Trades = 'trades',
  AuthUsers = 'authUsers',
  Investments = 'investments',
  InvestmentCount = 'investmentCount',
  SharesChanges = 'sharesChanges',
  FeeSharesChanges = 'feeSharesChanges',
  InvestmentSharesChanges = 'investmentSharesChanges',
  Shares = 'shares',
  SharesHistory = 'sharesHistory',
  Portfolio = 'portfolio',
  PortfolioHistory = 'portfolioHistory',
  FeeState = 'feeState',
  FeeStateHistory = 'feeStateHistory',
  Calculations = 'calculations',
  CalculationsHistory = 'calculationsHistory',
  State = 'state',
  StateHistory = 'stateHistory',
  FirstInvestmentState = 'firstInvestmentState',
  HourlyStates = 'hourlyStates',
  DailyStates = 'dailyStates',
  MonthlyStates = 'monthlyStates',
  Events = 'events',
  Migrations = 'migrations'
}

export type GuaranteedRedemption = {
  __typename?: 'GuaranteedRedemption';
  id: Scalars['ID'];
  adapters: Array<IntegrationAdapter>;
  buffer: Scalars['BigInt'];
};


export type GuaranteedRedemptionAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type GuaranteedRedemptionAdapterAddedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'GuaranteedRedemptionAdapterAddedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  adapter: IntegrationAdapter;
};

export type GuaranteedRedemptionAdapterAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GuaranteedRedemptionAdapterAddedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Adapter = 'adapter'
}

export type GuaranteedRedemptionAdapterRemovedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'GuaranteedRedemptionAdapterRemovedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  adapter: IntegrationAdapter;
};

export type GuaranteedRedemptionAdapterRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GuaranteedRedemptionAdapterRemovedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Adapter = 'adapter'
}

export type GuaranteedRedemptionFundSettingsSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'GuaranteedRedemptionFundSettingsSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  startTimestamp: Scalars['BigInt'];
  duration: Scalars['BigInt'];
};

export type GuaranteedRedemptionFundSettingsSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['BigInt']>;
  startTimestamp_not?: Maybe<Scalars['BigInt']>;
  startTimestamp_gt?: Maybe<Scalars['BigInt']>;
  startTimestamp_lt?: Maybe<Scalars['BigInt']>;
  startTimestamp_gte?: Maybe<Scalars['BigInt']>;
  startTimestamp_lte?: Maybe<Scalars['BigInt']>;
  startTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  startTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  duration?: Maybe<Scalars['BigInt']>;
  duration_not?: Maybe<Scalars['BigInt']>;
  duration_gt?: Maybe<Scalars['BigInt']>;
  duration_lt?: Maybe<Scalars['BigInt']>;
  duration_gte?: Maybe<Scalars['BigInt']>;
  duration_lte?: Maybe<Scalars['BigInt']>;
  duration_in?: Maybe<Array<Scalars['BigInt']>>;
  duration_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum GuaranteedRedemptionFundSettingsSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  StartTimestamp = 'startTimestamp',
  Duration = 'duration'
}

export type GuaranteedRedemptionRedemptionWindowBufferSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'GuaranteedRedemptionRedemptionWindowBufferSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevBuffer: Scalars['BigInt'];
  nextBuffer: Scalars['BigInt'];
};

export type GuaranteedRedemptionRedemptionWindowBufferSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevBuffer?: Maybe<Scalars['BigInt']>;
  prevBuffer_not?: Maybe<Scalars['BigInt']>;
  prevBuffer_gt?: Maybe<Scalars['BigInt']>;
  prevBuffer_lt?: Maybe<Scalars['BigInt']>;
  prevBuffer_gte?: Maybe<Scalars['BigInt']>;
  prevBuffer_lte?: Maybe<Scalars['BigInt']>;
  prevBuffer_in?: Maybe<Array<Scalars['BigInt']>>;
  prevBuffer_not_in?: Maybe<Array<Scalars['BigInt']>>;
  nextBuffer?: Maybe<Scalars['BigInt']>;
  nextBuffer_not?: Maybe<Scalars['BigInt']>;
  nextBuffer_gt?: Maybe<Scalars['BigInt']>;
  nextBuffer_lt?: Maybe<Scalars['BigInt']>;
  nextBuffer_gte?: Maybe<Scalars['BigInt']>;
  nextBuffer_lte?: Maybe<Scalars['BigInt']>;
  nextBuffer_in?: Maybe<Array<Scalars['BigInt']>>;
  nextBuffer_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum GuaranteedRedemptionRedemptionWindowBufferSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevBuffer = 'prevBuffer',
  NextBuffer = 'nextBuffer'
}

export type GuaranteedRedemptionSetting = PolicySettingInterface & {
  __typename?: 'GuaranteedRedemptionSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  startTimestamp: Scalars['BigInt'];
  duration: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type GuaranteedRedemptionSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type GuaranteedRedemptionSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['BigInt']>;
  startTimestamp_not?: Maybe<Scalars['BigInt']>;
  startTimestamp_gt?: Maybe<Scalars['BigInt']>;
  startTimestamp_lt?: Maybe<Scalars['BigInt']>;
  startTimestamp_gte?: Maybe<Scalars['BigInt']>;
  startTimestamp_lte?: Maybe<Scalars['BigInt']>;
  startTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  startTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  duration?: Maybe<Scalars['BigInt']>;
  duration_not?: Maybe<Scalars['BigInt']>;
  duration_gt?: Maybe<Scalars['BigInt']>;
  duration_lt?: Maybe<Scalars['BigInt']>;
  duration_gte?: Maybe<Scalars['BigInt']>;
  duration_lte?: Maybe<Scalars['BigInt']>;
  duration_in?: Maybe<Array<Scalars['BigInt']>>;
  duration_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum GuaranteedRedemptionSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  StartTimestamp = 'startTimestamp',
  Duration = 'duration',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type GuaranteedRedemption_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  adapters?: Maybe<Array<Scalars['String']>>;
  adapters_not?: Maybe<Array<Scalars['String']>>;
  adapters_contains?: Maybe<Array<Scalars['String']>>;
  adapters_not_contains?: Maybe<Array<Scalars['String']>>;
  buffer?: Maybe<Scalars['BigInt']>;
  buffer_not?: Maybe<Scalars['BigInt']>;
  buffer_gt?: Maybe<Scalars['BigInt']>;
  buffer_lt?: Maybe<Scalars['BigInt']>;
  buffer_gte?: Maybe<Scalars['BigInt']>;
  buffer_lte?: Maybe<Scalars['BigInt']>;
  buffer_in?: Maybe<Array<Scalars['BigInt']>>;
  buffer_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum GuaranteedRedemption_OrderBy {
  Id = 'id',
  Adapters = 'adapters',
  Buffer = 'buffer'
}

export type HoldingState = FundStateInterface & {
  __typename?: 'HoldingState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  asset: Asset;
  price?: Maybe<AssetPrice>;
  amount: Scalars['BigDecimal'];
  events: Array<FundEventInterface>;
};


export type HoldingStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type HoldingState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  price_not?: Maybe<Scalars['String']>;
  price_gt?: Maybe<Scalars['String']>;
  price_lt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['String']>;
  price_lte?: Maybe<Scalars['String']>;
  price_in?: Maybe<Array<Scalars['String']>>;
  price_not_in?: Maybe<Array<Scalars['String']>>;
  price_contains?: Maybe<Scalars['String']>;
  price_not_contains?: Maybe<Scalars['String']>;
  price_starts_with?: Maybe<Scalars['String']>;
  price_not_starts_with?: Maybe<Scalars['String']>;
  price_ends_with?: Maybe<Scalars['String']>;
  price_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum HoldingState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Asset = 'asset',
  Price = 'price',
  Amount = 'amount',
  Events = 'events'
}

export type HourlyAssetPriceCandle = {
  __typename?: 'HourlyAssetPriceCandle';
  id: Scalars['ID'];
  asset: Asset;
  group: HourlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: AssetPrice;
  close: Scalars['BigDecimal'];
  closeRef: AssetPrice;
  low: Scalars['BigDecimal'];
  lowRef: AssetPrice;
  high: Scalars['BigDecimal'];
  highRef: AssetPrice;
};

export type HourlyAssetPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum HourlyAssetPriceCandle_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type HourlyCurrencyPriceCandle = {
  __typename?: 'HourlyCurrencyPriceCandle';
  id: Scalars['ID'];
  currency: Currency;
  group: HourlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type HourlyCurrencyPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum HourlyCurrencyPriceCandle_OrderBy {
  Id = 'id',
  Currency = 'currency',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type HourlyFundState = PeriodicFundStateInterface & {
  __typename?: 'HourlyFundState';
  id: Scalars['ID'];
  fund: Fund;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: FundState;
  last: FundState;
};

export type HourlyFundState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['BigInt']>;
  start_not?: Maybe<Scalars['BigInt']>;
  start_gt?: Maybe<Scalars['BigInt']>;
  start_lt?: Maybe<Scalars['BigInt']>;
  start_gte?: Maybe<Scalars['BigInt']>;
  start_lte?: Maybe<Scalars['BigInt']>;
  start_in?: Maybe<Array<Scalars['BigInt']>>;
  start_not_in?: Maybe<Array<Scalars['BigInt']>>;
  end?: Maybe<Scalars['BigInt']>;
  end_not?: Maybe<Scalars['BigInt']>;
  end_gt?: Maybe<Scalars['BigInt']>;
  end_lt?: Maybe<Scalars['BigInt']>;
  end_gte?: Maybe<Scalars['BigInt']>;
  end_lte?: Maybe<Scalars['BigInt']>;
  end_in?: Maybe<Array<Scalars['BigInt']>>;
  end_not_in?: Maybe<Array<Scalars['BigInt']>>;
  first?: Maybe<Scalars['String']>;
  first_not?: Maybe<Scalars['String']>;
  first_gt?: Maybe<Scalars['String']>;
  first_lt?: Maybe<Scalars['String']>;
  first_gte?: Maybe<Scalars['String']>;
  first_lte?: Maybe<Scalars['String']>;
  first_in?: Maybe<Array<Scalars['String']>>;
  first_not_in?: Maybe<Array<Scalars['String']>>;
  first_contains?: Maybe<Scalars['String']>;
  first_not_contains?: Maybe<Scalars['String']>;
  first_starts_with?: Maybe<Scalars['String']>;
  first_not_starts_with?: Maybe<Scalars['String']>;
  first_ends_with?: Maybe<Scalars['String']>;
  first_not_ends_with?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
  last_not?: Maybe<Scalars['String']>;
  last_gt?: Maybe<Scalars['String']>;
  last_lt?: Maybe<Scalars['String']>;
  last_gte?: Maybe<Scalars['String']>;
  last_lte?: Maybe<Scalars['String']>;
  last_in?: Maybe<Array<Scalars['String']>>;
  last_not_in?: Maybe<Array<Scalars['String']>>;
  last_contains?: Maybe<Scalars['String']>;
  last_not_contains?: Maybe<Scalars['String']>;
  last_starts_with?: Maybe<Scalars['String']>;
  last_not_starts_with?: Maybe<Scalars['String']>;
  last_ends_with?: Maybe<Scalars['String']>;
  last_not_ends_with?: Maybe<Scalars['String']>;
};

export enum HourlyFundState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Start = 'start',
  End = 'end',
  First = 'first',
  Last = 'last'
}

export type HourlyPriceCandleGroup = {
  __typename?: 'HourlyPriceCandleGroup';
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  assetCandles: Array<HourlyAssetPriceCandle>;
  currencyCandles: Array<HourlyCurrencyPriceCandle>;
};


export type HourlyPriceCandleGroupAssetCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyAssetPriceCandle_Filter>;
};


export type HourlyPriceCandleGroupCurrencyCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyCurrencyPriceCandle_Filter>;
};

export type HourlyPriceCandleGroup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum HourlyPriceCandleGroup_OrderBy {
  Id = 'id',
  From = 'from',
  To = 'to',
  AssetCandles = 'assetCandles',
  CurrencyCandles = 'currencyCandles'
}

export type IndividualFeeStateInterface = {
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  fee: Fee;
  events: Array<FundEventInterface>;
};


export type IndividualFeeStateInterfaceEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type IndividualFeeStateInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum IndividualFeeStateInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Fee = 'fee',
  Events = 'events'
}

export type IntegrationAdapter = {
  __typename?: 'IntegrationAdapter';
  id: Scalars['ID'];
  integrationManager: IntegrationManager;
  identifier: Scalars['String'];
  blacklisted: Array<AdapterBlacklistSetting>;
  whitelisted: Array<AdapterWhitelistSetting>;
};


export type IntegrationAdapterBlacklistedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistSetting_Filter>;
};


export type IntegrationAdapterWhitelistedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistSetting_Filter>;
};

export type IntegrationAdapter_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  integrationManager?: Maybe<Scalars['String']>;
  integrationManager_not?: Maybe<Scalars['String']>;
  integrationManager_gt?: Maybe<Scalars['String']>;
  integrationManager_lt?: Maybe<Scalars['String']>;
  integrationManager_gte?: Maybe<Scalars['String']>;
  integrationManager_lte?: Maybe<Scalars['String']>;
  integrationManager_in?: Maybe<Array<Scalars['String']>>;
  integrationManager_not_in?: Maybe<Array<Scalars['String']>>;
  integrationManager_contains?: Maybe<Scalars['String']>;
  integrationManager_not_contains?: Maybe<Scalars['String']>;
  integrationManager_starts_with?: Maybe<Scalars['String']>;
  integrationManager_not_starts_with?: Maybe<Scalars['String']>;
  integrationManager_ends_with?: Maybe<Scalars['String']>;
  integrationManager_not_ends_with?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
};

export enum IntegrationAdapter_OrderBy {
  Id = 'id',
  IntegrationManager = 'integrationManager',
  Identifier = 'identifier',
  Blacklisted = 'blacklisted',
  Whitelisted = 'whitelisted'
}

export type IntegrationManager = {
  __typename?: 'IntegrationManager';
  id: Scalars['ID'];
  adapters: Array<IntegrationAdapter>;
};


export type IntegrationManagerAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
};

export type IntegrationManager_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum IntegrationManager_OrderBy {
  Id = 'id',
  Adapters = 'adapters'
}

export enum IntegrationMethod {
  AddTrackedAssets = 'ADD_TRACKED_ASSETS',
  TakeOrder = 'TAKE_ORDER',
  Lend = 'LEND',
  Redeem = 'REDEEM'
}

export type Investment = {
  __typename?: 'Investment';
  id: Scalars['ID'];
  since: Scalars['BigInt'];
  fund: Fund;
  investor: Account;
  shares: Scalars['BigDecimal'];
  state: InvestmentState;
  stateHistory: Array<InvestmentState>;
};


export type InvestmentStateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentState_Filter>;
};

export type InvestmentSharesChangeInterface = {
  id: Scalars['ID'];
  fund: Fund;
  investor: Account;
  timestamp: Scalars['BigInt'];
  type: ShareChangeType;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  fundState: FundState;
  transaction: Transaction;
  calculations: CalculationState;
};

export type InvestmentSharesChangeInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
};

export enum InvestmentSharesChangeInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Type = 'type',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  FundState = 'fundState',
  Transaction = 'transaction',
  Calculations = 'calculations'
}

export type InvestmentState = {
  __typename?: 'InvestmentState';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  fund: Fund;
  investor: Account;
  investment: Investment;
  shares: Scalars['BigDecimal'];
  changes: Array<SharesChangeInterface>;
  fundState: FundState;
};


export type InvestmentStateChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesChangeInterface_Filter>;
};

export type InvestmentState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  investment?: Maybe<Scalars['String']>;
  investment_not?: Maybe<Scalars['String']>;
  investment_gt?: Maybe<Scalars['String']>;
  investment_lt?: Maybe<Scalars['String']>;
  investment_gte?: Maybe<Scalars['String']>;
  investment_lte?: Maybe<Scalars['String']>;
  investment_in?: Maybe<Array<Scalars['String']>>;
  investment_not_in?: Maybe<Array<Scalars['String']>>;
  investment_contains?: Maybe<Scalars['String']>;
  investment_not_contains?: Maybe<Scalars['String']>;
  investment_starts_with?: Maybe<Scalars['String']>;
  investment_not_starts_with?: Maybe<Scalars['String']>;
  investment_ends_with?: Maybe<Scalars['String']>;
  investment_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum InvestmentState_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Fund = 'fund',
  Investor = 'investor',
  Investment = 'investment',
  Shares = 'shares',
  Changes = 'changes',
  FundState = 'fundState'
}

export type Investment_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  since?: Maybe<Scalars['BigInt']>;
  since_not?: Maybe<Scalars['BigInt']>;
  since_gt?: Maybe<Scalars['BigInt']>;
  since_lt?: Maybe<Scalars['BigInt']>;
  since_gte?: Maybe<Scalars['BigInt']>;
  since_lte?: Maybe<Scalars['BigInt']>;
  since_in?: Maybe<Array<Scalars['BigInt']>>;
  since_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Investment_OrderBy {
  Id = 'id',
  Since = 'since',
  Fund = 'fund',
  Investor = 'investor',
  Shares = 'shares',
  State = 'state',
  StateHistory = 'stateHistory'
}

export type InvestorWhitelistAddressesAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'InvestorWhitelistAddressesAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Account>;
};


export type InvestorWhitelistAddressesAddedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
};

export type InvestorWhitelistAddressesAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum InvestorWhitelistAddressesAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type InvestorWhitelistAddressesRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'InvestorWhitelistAddressesRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  items: Array<Account>;
};


export type InvestorWhitelistAddressesRemovedEventItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
};

export type InvestorWhitelistAddressesRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['String']>>;
  items_not?: Maybe<Array<Scalars['String']>>;
  items_contains?: Maybe<Array<Scalars['String']>>;
  items_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum InvestorWhitelistAddressesRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Items = 'items'
}

export type InvestorWhitelistSetting = PolicySettingInterface & {
  __typename?: 'InvestorWhitelistSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  listed: Array<Account>;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type InvestorWhitelistSettingListedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
};


export type InvestorWhitelistSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type InvestorWhitelistSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  listed?: Maybe<Array<Scalars['String']>>;
  listed_not?: Maybe<Array<Scalars['String']>>;
  listed_contains?: Maybe<Array<Scalars['String']>>;
  listed_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum InvestorWhitelistSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Listed = 'listed',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type LendTrade = Trade & {
  __typename?: 'LendTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmount: AssetAmount;
  outgoingAssetAmount: AssetAmount;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};

export type LendTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmount?: Maybe<Scalars['String']>;
  incomingAssetAmount_not?: Maybe<Scalars['String']>;
  incomingAssetAmount_gt?: Maybe<Scalars['String']>;
  incomingAssetAmount_lt?: Maybe<Scalars['String']>;
  incomingAssetAmount_gte?: Maybe<Scalars['String']>;
  incomingAssetAmount_lte?: Maybe<Scalars['String']>;
  incomingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum LendTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmount = 'incomingAssetAmount',
  OutgoingAssetAmount = 'outgoingAssetAmount',
  Price = 'price',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type ManagementFeeSetting = FeeSettingInterface & {
  __typename?: 'ManagementFeeSetting';
  id: Scalars['ID'];
  fee: Fee;
  fund: Fund;
  scaledPerSecondRate: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type ManagementFeeSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type ManagementFeeSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  scaledPerSecondRate?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_not?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_gt?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_lt?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_gte?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_lte?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_in?: Maybe<Array<Scalars['BigInt']>>;
  scaledPerSecondRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum ManagementFeeSetting_OrderBy {
  Id = 'id',
  Fee = 'fee',
  Fund = 'fund',
  ScaledPerSecondRate = 'scaledPerSecondRate',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type ManagementFeeSettingsAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'ManagementFeeSettingsAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  scaledPerSecondRate: Scalars['BigInt'];
};

export type ManagementFeeSettingsAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  scaledPerSecondRate?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_not?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_gt?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_lt?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_gte?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_lte?: Maybe<Scalars['BigInt']>;
  scaledPerSecondRate_in?: Maybe<Array<Scalars['BigInt']>>;
  scaledPerSecondRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ManagementFeeSettingsAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  ScaledPerSecondRate = 'scaledPerSecondRate'
}

export type ManagementFeeSettledEvent = EventInterface & FundEventInterface & {
  __typename?: 'ManagementFeeSettledEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  sharesDue: Scalars['BigDecimal'];
  secondsSinceSettlement: Scalars['BigInt'];
};

export type ManagementFeeSettledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  sharesDue?: Maybe<Scalars['BigDecimal']>;
  sharesDue_not?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  secondsSinceSettlement?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_not?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_gt?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_lt?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_gte?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_lte?: Maybe<Scalars['BigInt']>;
  secondsSinceSettlement_in?: Maybe<Array<Scalars['BigInt']>>;
  secondsSinceSettlement_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ManagementFeeSettledEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  SharesDue = 'sharesDue',
  SecondsSinceSettlement = 'secondsSinceSettlement'
}

export type ManagementFeeState = FundStateInterface & IndividualFeeStateInterface & {
  __typename?: 'ManagementFeeState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  fee: Fee;
  lastSettled: Scalars['BigInt'];
  totalSharesPaidOut: Scalars['BigDecimal'];
  events: Array<FundEventInterface>;
};


export type ManagementFeeStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type ManagementFeeState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  lastSettled?: Maybe<Scalars['BigInt']>;
  lastSettled_not?: Maybe<Scalars['BigInt']>;
  lastSettled_gt?: Maybe<Scalars['BigInt']>;
  lastSettled_lt?: Maybe<Scalars['BigInt']>;
  lastSettled_gte?: Maybe<Scalars['BigInt']>;
  lastSettled_lte?: Maybe<Scalars['BigInt']>;
  lastSettled_in?: Maybe<Array<Scalars['BigInt']>>;
  lastSettled_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSharesPaidOut?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_not?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_gt?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_lt?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_gte?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_lte?: Maybe<Scalars['BigDecimal']>;
  totalSharesPaidOut_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSharesPaidOut_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum ManagementFeeState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Fee = 'fee',
  LastSettled = 'lastSettled',
  TotalSharesPaidOut = 'totalSharesPaidOut',
  Events = 'events'
}

export type MaxConcentrationSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'MaxConcentrationSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  value: Scalars['BigDecimal'];
};

export type MaxConcentrationSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigDecimal']>;
  value_not?: Maybe<Scalars['BigDecimal']>;
  value_gt?: Maybe<Scalars['BigDecimal']>;
  value_lt?: Maybe<Scalars['BigDecimal']>;
  value_gte?: Maybe<Scalars['BigDecimal']>;
  value_lte?: Maybe<Scalars['BigDecimal']>;
  value_in?: Maybe<Array<Scalars['BigDecimal']>>;
  value_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum MaxConcentrationSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Value = 'value'
}

export type MaxConcentrationSetting = PolicySettingInterface & {
  __typename?: 'MaxConcentrationSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  maxConcentration: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type MaxConcentrationSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type MaxConcentrationSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  maxConcentration?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_not?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_gt?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_lt?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_gte?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_lte?: Maybe<Scalars['BigDecimal']>;
  maxConcentration_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxConcentration_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum MaxConcentrationSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  MaxConcentration = 'maxConcentration',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type MigratedSharesDuePaidEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigratedSharesDuePaidEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  sharesDue: Scalars['BigDecimal'];
};

export type MigratedSharesDuePaidEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  sharesDue?: Maybe<Scalars['BigDecimal']>;
  sharesDue_not?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum MigratedSharesDuePaidEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  SharesDue = 'sharesDue'
}

export type Migration = {
  __typename?: 'Migration';
  id: Scalars['ID'];
  prevRelease: Release;
  nextRelease: Release;
  fund: Fund;
  executableTimestamp: Scalars['BigInt'];
  executed: Scalars['Boolean'];
  cancelled: Scalars['Boolean'];
  nextAccessor: Scalars['String'];
};

export type MigrationCancelledEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigrationCancelledEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  migration: Migration;
  executableTimestamp: Scalars['BigInt'];
};

export type MigrationCancelledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  migration?: Maybe<Scalars['String']>;
  migration_not?: Maybe<Scalars['String']>;
  migration_gt?: Maybe<Scalars['String']>;
  migration_lt?: Maybe<Scalars['String']>;
  migration_gte?: Maybe<Scalars['String']>;
  migration_lte?: Maybe<Scalars['String']>;
  migration_in?: Maybe<Array<Scalars['String']>>;
  migration_not_in?: Maybe<Array<Scalars['String']>>;
  migration_contains?: Maybe<Scalars['String']>;
  migration_not_contains?: Maybe<Scalars['String']>;
  migration_starts_with?: Maybe<Scalars['String']>;
  migration_not_starts_with?: Maybe<Scalars['String']>;
  migration_ends_with?: Maybe<Scalars['String']>;
  migration_not_ends_with?: Maybe<Scalars['String']>;
  executableTimestamp?: Maybe<Scalars['BigInt']>;
  executableTimestamp_not?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  executableTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MigrationCancelledEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Migration = 'migration',
  ExecutableTimestamp = 'executableTimestamp'
}

export type MigrationExecutedEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigrationExecutedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  migration: Migration;
  executableTimestamp: Scalars['BigInt'];
};

export type MigrationExecutedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  migration?: Maybe<Scalars['String']>;
  migration_not?: Maybe<Scalars['String']>;
  migration_gt?: Maybe<Scalars['String']>;
  migration_lt?: Maybe<Scalars['String']>;
  migration_gte?: Maybe<Scalars['String']>;
  migration_lte?: Maybe<Scalars['String']>;
  migration_in?: Maybe<Array<Scalars['String']>>;
  migration_not_in?: Maybe<Array<Scalars['String']>>;
  migration_contains?: Maybe<Scalars['String']>;
  migration_not_contains?: Maybe<Scalars['String']>;
  migration_starts_with?: Maybe<Scalars['String']>;
  migration_not_starts_with?: Maybe<Scalars['String']>;
  migration_ends_with?: Maybe<Scalars['String']>;
  migration_not_ends_with?: Maybe<Scalars['String']>;
  executableTimestamp?: Maybe<Scalars['BigInt']>;
  executableTimestamp_not?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  executableTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MigrationExecutedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Migration = 'migration',
  ExecutableTimestamp = 'executableTimestamp'
}

export type MigrationInCancelHookFailedEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigrationInCancelHookFailedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  vaultProxy: Scalars['String'];
  prevFundDeployer: Scalars['String'];
  nextFundDeployer: Scalars['String'];
  nextVaultLib: Scalars['String'];
  nextVaultAccessor: Scalars['String'];
  failureReturnData: Scalars['String'];
};

export type MigrationInCancelHookFailedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  vaultProxy?: Maybe<Scalars['String']>;
  vaultProxy_not?: Maybe<Scalars['String']>;
  vaultProxy_gt?: Maybe<Scalars['String']>;
  vaultProxy_lt?: Maybe<Scalars['String']>;
  vaultProxy_gte?: Maybe<Scalars['String']>;
  vaultProxy_lte?: Maybe<Scalars['String']>;
  vaultProxy_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_not_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_contains?: Maybe<Scalars['String']>;
  vaultProxy_not_contains?: Maybe<Scalars['String']>;
  vaultProxy_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_not_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_ends_with?: Maybe<Scalars['String']>;
  vaultProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer?: Maybe<Scalars['String']>;
  prevFundDeployer_not?: Maybe<Scalars['String']>;
  prevFundDeployer_gt?: Maybe<Scalars['String']>;
  prevFundDeployer_lt?: Maybe<Scalars['String']>;
  prevFundDeployer_gte?: Maybe<Scalars['String']>;
  prevFundDeployer_lte?: Maybe<Scalars['String']>;
  prevFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_not_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer?: Maybe<Scalars['String']>;
  nextFundDeployer_not?: Maybe<Scalars['String']>;
  nextFundDeployer_gt?: Maybe<Scalars['String']>;
  nextFundDeployer_lt?: Maybe<Scalars['String']>;
  nextFundDeployer_gte?: Maybe<Scalars['String']>;
  nextFundDeployer_lte?: Maybe<Scalars['String']>;
  nextFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_not_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib?: Maybe<Scalars['String']>;
  nextVaultLib_not?: Maybe<Scalars['String']>;
  nextVaultLib_gt?: Maybe<Scalars['String']>;
  nextVaultLib_lt?: Maybe<Scalars['String']>;
  nextVaultLib_gte?: Maybe<Scalars['String']>;
  nextVaultLib_lte?: Maybe<Scalars['String']>;
  nextVaultLib_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_contains?: Maybe<Scalars['String']>;
  nextVaultLib_not_contains?: Maybe<Scalars['String']>;
  nextVaultLib_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_ends_with?: Maybe<Scalars['String']>;
  nextVaultAccessor?: Maybe<Scalars['String']>;
  nextVaultAccessor_not?: Maybe<Scalars['String']>;
  nextVaultAccessor_gt?: Maybe<Scalars['String']>;
  nextVaultAccessor_lt?: Maybe<Scalars['String']>;
  nextVaultAccessor_gte?: Maybe<Scalars['String']>;
  nextVaultAccessor_lte?: Maybe<Scalars['String']>;
  nextVaultAccessor_in?: Maybe<Array<Scalars['String']>>;
  nextVaultAccessor_not_in?: Maybe<Array<Scalars['String']>>;
  nextVaultAccessor_contains?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_contains?: Maybe<Scalars['String']>;
  nextVaultAccessor_starts_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_starts_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_ends_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_ends_with?: Maybe<Scalars['String']>;
  failureReturnData?: Maybe<Scalars['String']>;
  failureReturnData_not?: Maybe<Scalars['String']>;
  failureReturnData_gt?: Maybe<Scalars['String']>;
  failureReturnData_lt?: Maybe<Scalars['String']>;
  failureReturnData_gte?: Maybe<Scalars['String']>;
  failureReturnData_lte?: Maybe<Scalars['String']>;
  failureReturnData_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_not_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_contains?: Maybe<Scalars['String']>;
  failureReturnData_not_contains?: Maybe<Scalars['String']>;
  failureReturnData_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_not_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_ends_with?: Maybe<Scalars['String']>;
  failureReturnData_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MigrationInCancelHookFailedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  VaultProxy = 'vaultProxy',
  PrevFundDeployer = 'prevFundDeployer',
  NextFundDeployer = 'nextFundDeployer',
  NextVaultLib = 'nextVaultLib',
  NextVaultAccessor = 'nextVaultAccessor',
  FailureReturnData = 'failureReturnData'
}

export type MigrationOutHookFailedEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigrationOutHookFailedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  vaultProxy: Scalars['String'];
  prevFundDeployer: Scalars['String'];
  nextFundDeployer: Scalars['String'];
  nextVaultLib: Scalars['String'];
  nextVaultAccessor: Scalars['String'];
  failureReturnData: Scalars['String'];
};

export type MigrationOutHookFailedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  vaultProxy?: Maybe<Scalars['String']>;
  vaultProxy_not?: Maybe<Scalars['String']>;
  vaultProxy_gt?: Maybe<Scalars['String']>;
  vaultProxy_lt?: Maybe<Scalars['String']>;
  vaultProxy_gte?: Maybe<Scalars['String']>;
  vaultProxy_lte?: Maybe<Scalars['String']>;
  vaultProxy_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_not_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_contains?: Maybe<Scalars['String']>;
  vaultProxy_not_contains?: Maybe<Scalars['String']>;
  vaultProxy_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_not_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_ends_with?: Maybe<Scalars['String']>;
  vaultProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer?: Maybe<Scalars['String']>;
  prevFundDeployer_not?: Maybe<Scalars['String']>;
  prevFundDeployer_gt?: Maybe<Scalars['String']>;
  prevFundDeployer_lt?: Maybe<Scalars['String']>;
  prevFundDeployer_gte?: Maybe<Scalars['String']>;
  prevFundDeployer_lte?: Maybe<Scalars['String']>;
  prevFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  prevFundDeployer_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_not_contains?: Maybe<Scalars['String']>;
  prevFundDeployer_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  prevFundDeployer_ends_with?: Maybe<Scalars['String']>;
  prevFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer?: Maybe<Scalars['String']>;
  nextFundDeployer_not?: Maybe<Scalars['String']>;
  nextFundDeployer_gt?: Maybe<Scalars['String']>;
  nextFundDeployer_lt?: Maybe<Scalars['String']>;
  nextFundDeployer_gte?: Maybe<Scalars['String']>;
  nextFundDeployer_lte?: Maybe<Scalars['String']>;
  nextFundDeployer_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  nextFundDeployer_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_not_contains?: Maybe<Scalars['String']>;
  nextFundDeployer_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  nextFundDeployer_ends_with?: Maybe<Scalars['String']>;
  nextFundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib?: Maybe<Scalars['String']>;
  nextVaultLib_not?: Maybe<Scalars['String']>;
  nextVaultLib_gt?: Maybe<Scalars['String']>;
  nextVaultLib_lt?: Maybe<Scalars['String']>;
  nextVaultLib_gte?: Maybe<Scalars['String']>;
  nextVaultLib_lte?: Maybe<Scalars['String']>;
  nextVaultLib_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_contains?: Maybe<Scalars['String']>;
  nextVaultLib_not_contains?: Maybe<Scalars['String']>;
  nextVaultLib_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_ends_with?: Maybe<Scalars['String']>;
  nextVaultAccessor?: Maybe<Scalars['String']>;
  nextVaultAccessor_not?: Maybe<Scalars['String']>;
  nextVaultAccessor_gt?: Maybe<Scalars['String']>;
  nextVaultAccessor_lt?: Maybe<Scalars['String']>;
  nextVaultAccessor_gte?: Maybe<Scalars['String']>;
  nextVaultAccessor_lte?: Maybe<Scalars['String']>;
  nextVaultAccessor_in?: Maybe<Array<Scalars['String']>>;
  nextVaultAccessor_not_in?: Maybe<Array<Scalars['String']>>;
  nextVaultAccessor_contains?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_contains?: Maybe<Scalars['String']>;
  nextVaultAccessor_starts_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_starts_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_ends_with?: Maybe<Scalars['String']>;
  nextVaultAccessor_not_ends_with?: Maybe<Scalars['String']>;
  failureReturnData?: Maybe<Scalars['String']>;
  failureReturnData_not?: Maybe<Scalars['String']>;
  failureReturnData_gt?: Maybe<Scalars['String']>;
  failureReturnData_lt?: Maybe<Scalars['String']>;
  failureReturnData_gte?: Maybe<Scalars['String']>;
  failureReturnData_lte?: Maybe<Scalars['String']>;
  failureReturnData_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_not_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_contains?: Maybe<Scalars['String']>;
  failureReturnData_not_contains?: Maybe<Scalars['String']>;
  failureReturnData_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_not_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_ends_with?: Maybe<Scalars['String']>;
  failureReturnData_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MigrationOutHookFailedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  VaultProxy = 'vaultProxy',
  PrevFundDeployer = 'prevFundDeployer',
  NextFundDeployer = 'nextFundDeployer',
  NextVaultLib = 'nextVaultLib',
  NextVaultAccessor = 'nextVaultAccessor',
  FailureReturnData = 'failureReturnData'
}

export type MigrationSignaledEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigrationSignaledEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  migration: Migration;
};

export type MigrationSignaledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  migration?: Maybe<Scalars['String']>;
  migration_not?: Maybe<Scalars['String']>;
  migration_gt?: Maybe<Scalars['String']>;
  migration_lt?: Maybe<Scalars['String']>;
  migration_gte?: Maybe<Scalars['String']>;
  migration_lte?: Maybe<Scalars['String']>;
  migration_in?: Maybe<Array<Scalars['String']>>;
  migration_not_in?: Maybe<Array<Scalars['String']>>;
  migration_contains?: Maybe<Scalars['String']>;
  migration_not_contains?: Maybe<Scalars['String']>;
  migration_starts_with?: Maybe<Scalars['String']>;
  migration_not_starts_with?: Maybe<Scalars['String']>;
  migration_ends_with?: Maybe<Scalars['String']>;
  migration_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MigrationSignaledEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Migration = 'migration'
}

export type MigrationTimelockSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'MigrationTimelockSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevTimelock: Scalars['BigInt'];
  nextTimelock: Scalars['BigInt'];
};

export type MigrationTimelockSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevTimelock?: Maybe<Scalars['BigInt']>;
  prevTimelock_not?: Maybe<Scalars['BigInt']>;
  prevTimelock_gt?: Maybe<Scalars['BigInt']>;
  prevTimelock_lt?: Maybe<Scalars['BigInt']>;
  prevTimelock_gte?: Maybe<Scalars['BigInt']>;
  prevTimelock_lte?: Maybe<Scalars['BigInt']>;
  prevTimelock_in?: Maybe<Array<Scalars['BigInt']>>;
  prevTimelock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  nextTimelock?: Maybe<Scalars['BigInt']>;
  nextTimelock_not?: Maybe<Scalars['BigInt']>;
  nextTimelock_gt?: Maybe<Scalars['BigInt']>;
  nextTimelock_lt?: Maybe<Scalars['BigInt']>;
  nextTimelock_gte?: Maybe<Scalars['BigInt']>;
  nextTimelock_lte?: Maybe<Scalars['BigInt']>;
  nextTimelock_in?: Maybe<Array<Scalars['BigInt']>>;
  nextTimelock_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MigrationTimelockSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevTimelock = 'prevTimelock',
  NextTimelock = 'nextTimelock'
}

export type Migration_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prevRelease?: Maybe<Scalars['String']>;
  prevRelease_not?: Maybe<Scalars['String']>;
  prevRelease_gt?: Maybe<Scalars['String']>;
  prevRelease_lt?: Maybe<Scalars['String']>;
  prevRelease_gte?: Maybe<Scalars['String']>;
  prevRelease_lte?: Maybe<Scalars['String']>;
  prevRelease_in?: Maybe<Array<Scalars['String']>>;
  prevRelease_not_in?: Maybe<Array<Scalars['String']>>;
  prevRelease_contains?: Maybe<Scalars['String']>;
  prevRelease_not_contains?: Maybe<Scalars['String']>;
  prevRelease_starts_with?: Maybe<Scalars['String']>;
  prevRelease_not_starts_with?: Maybe<Scalars['String']>;
  prevRelease_ends_with?: Maybe<Scalars['String']>;
  prevRelease_not_ends_with?: Maybe<Scalars['String']>;
  nextRelease?: Maybe<Scalars['String']>;
  nextRelease_not?: Maybe<Scalars['String']>;
  nextRelease_gt?: Maybe<Scalars['String']>;
  nextRelease_lt?: Maybe<Scalars['String']>;
  nextRelease_gte?: Maybe<Scalars['String']>;
  nextRelease_lte?: Maybe<Scalars['String']>;
  nextRelease_in?: Maybe<Array<Scalars['String']>>;
  nextRelease_not_in?: Maybe<Array<Scalars['String']>>;
  nextRelease_contains?: Maybe<Scalars['String']>;
  nextRelease_not_contains?: Maybe<Scalars['String']>;
  nextRelease_starts_with?: Maybe<Scalars['String']>;
  nextRelease_not_starts_with?: Maybe<Scalars['String']>;
  nextRelease_ends_with?: Maybe<Scalars['String']>;
  nextRelease_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  executableTimestamp?: Maybe<Scalars['BigInt']>;
  executableTimestamp_not?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lt?: Maybe<Scalars['BigInt']>;
  executableTimestamp_gte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_lte?: Maybe<Scalars['BigInt']>;
  executableTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  executableTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  executed?: Maybe<Scalars['Boolean']>;
  executed_not?: Maybe<Scalars['Boolean']>;
  executed_in?: Maybe<Array<Scalars['Boolean']>>;
  executed_not_in?: Maybe<Array<Scalars['Boolean']>>;
  cancelled?: Maybe<Scalars['Boolean']>;
  cancelled_not?: Maybe<Scalars['Boolean']>;
  cancelled_in?: Maybe<Array<Scalars['Boolean']>>;
  cancelled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  nextAccessor?: Maybe<Scalars['String']>;
  nextAccessor_not?: Maybe<Scalars['String']>;
  nextAccessor_gt?: Maybe<Scalars['String']>;
  nextAccessor_lt?: Maybe<Scalars['String']>;
  nextAccessor_gte?: Maybe<Scalars['String']>;
  nextAccessor_lte?: Maybe<Scalars['String']>;
  nextAccessor_in?: Maybe<Array<Scalars['String']>>;
  nextAccessor_not_in?: Maybe<Array<Scalars['String']>>;
  nextAccessor_contains?: Maybe<Scalars['String']>;
  nextAccessor_not_contains?: Maybe<Scalars['String']>;
  nextAccessor_starts_with?: Maybe<Scalars['String']>;
  nextAccessor_not_starts_with?: Maybe<Scalars['String']>;
  nextAccessor_ends_with?: Maybe<Scalars['String']>;
  nextAccessor_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Migration_OrderBy {
  Id = 'id',
  PrevRelease = 'prevRelease',
  NextRelease = 'nextRelease',
  Fund = 'fund',
  ExecutableTimestamp = 'executableTimestamp',
  Executed = 'executed',
  Cancelled = 'cancelled',
  NextAccessor = 'nextAccessor'
}

export type MigratorSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'MigratorSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevMigrator?: Maybe<Account>;
  nextMigrator: Account;
};

export type MigratorSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevMigrator?: Maybe<Scalars['String']>;
  prevMigrator_not?: Maybe<Scalars['String']>;
  prevMigrator_gt?: Maybe<Scalars['String']>;
  prevMigrator_lt?: Maybe<Scalars['String']>;
  prevMigrator_gte?: Maybe<Scalars['String']>;
  prevMigrator_lte?: Maybe<Scalars['String']>;
  prevMigrator_in?: Maybe<Array<Scalars['String']>>;
  prevMigrator_not_in?: Maybe<Array<Scalars['String']>>;
  prevMigrator_contains?: Maybe<Scalars['String']>;
  prevMigrator_not_contains?: Maybe<Scalars['String']>;
  prevMigrator_starts_with?: Maybe<Scalars['String']>;
  prevMigrator_not_starts_with?: Maybe<Scalars['String']>;
  prevMigrator_ends_with?: Maybe<Scalars['String']>;
  prevMigrator_not_ends_with?: Maybe<Scalars['String']>;
  nextMigrator?: Maybe<Scalars['String']>;
  nextMigrator_not?: Maybe<Scalars['String']>;
  nextMigrator_gt?: Maybe<Scalars['String']>;
  nextMigrator_lt?: Maybe<Scalars['String']>;
  nextMigrator_gte?: Maybe<Scalars['String']>;
  nextMigrator_lte?: Maybe<Scalars['String']>;
  nextMigrator_in?: Maybe<Array<Scalars['String']>>;
  nextMigrator_not_in?: Maybe<Array<Scalars['String']>>;
  nextMigrator_contains?: Maybe<Scalars['String']>;
  nextMigrator_not_contains?: Maybe<Scalars['String']>;
  nextMigrator_starts_with?: Maybe<Scalars['String']>;
  nextMigrator_not_starts_with?: Maybe<Scalars['String']>;
  nextMigrator_ends_with?: Maybe<Scalars['String']>;
  nextMigrator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MigratorSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevMigrator = 'prevMigrator',
  NextMigrator = 'nextMigrator'
}

export type MinMaxInvestmentFundSettingsSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'MinMaxInvestmentFundSettingsSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  minInvestmentAmount: Scalars['BigDecimal'];
  maxInvestmentAmount: Scalars['BigDecimal'];
};

export type MinMaxInvestmentFundSettingsSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  minInvestmentAmount?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_not?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_gt?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_lt?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_gte?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_lte?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  minInvestmentAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxInvestmentAmount?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_not?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_gt?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_lt?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_gte?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_lte?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxInvestmentAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum MinMaxInvestmentFundSettingsSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  MinInvestmentAmount = 'minInvestmentAmount',
  MaxInvestmentAmount = 'maxInvestmentAmount'
}

export type MinMaxInvestmentSetting = PolicySettingInterface & {
  __typename?: 'MinMaxInvestmentSetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  minInvestmentAmount: Scalars['BigDecimal'];
  maxInvestmentAmount: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type MinMaxInvestmentSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type MinMaxInvestmentSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  minInvestmentAmount?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_not?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_gt?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_lt?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_gte?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_lte?: Maybe<Scalars['BigDecimal']>;
  minInvestmentAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  minInvestmentAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxInvestmentAmount?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_not?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_gt?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_lt?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_gte?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_lte?: Maybe<Scalars['BigDecimal']>;
  maxInvestmentAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  maxInvestmentAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum MinMaxInvestmentSetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  MinInvestmentAmount = 'minInvestmentAmount',
  MaxInvestmentAmount = 'maxInvestmentAmount',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type MonthlyAssetPriceCandle = {
  __typename?: 'MonthlyAssetPriceCandle';
  id: Scalars['ID'];
  asset: Asset;
  group: MonthlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: AssetPrice;
  close: Scalars['BigDecimal'];
  closeRef: AssetPrice;
  low: Scalars['BigDecimal'];
  lowRef: AssetPrice;
  high: Scalars['BigDecimal'];
  highRef: AssetPrice;
};

export type MonthlyAssetPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MonthlyAssetPriceCandle_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type MonthlyCurrencyPriceCandle = {
  __typename?: 'MonthlyCurrencyPriceCandle';
  id: Scalars['ID'];
  currency: Currency;
  group: MonthlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type MonthlyCurrencyPriceCandle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  currency?: Maybe<Scalars['String']>;
  currency_not?: Maybe<Scalars['String']>;
  currency_gt?: Maybe<Scalars['String']>;
  currency_lt?: Maybe<Scalars['String']>;
  currency_gte?: Maybe<Scalars['String']>;
  currency_lte?: Maybe<Scalars['String']>;
  currency_in?: Maybe<Array<Scalars['String']>>;
  currency_not_in?: Maybe<Array<Scalars['String']>>;
  currency_contains?: Maybe<Scalars['String']>;
  currency_not_contains?: Maybe<Scalars['String']>;
  currency_starts_with?: Maybe<Scalars['String']>;
  currency_not_starts_with?: Maybe<Scalars['String']>;
  currency_ends_with?: Maybe<Scalars['String']>;
  currency_not_ends_with?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
  open?: Maybe<Scalars['BigDecimal']>;
  open_not?: Maybe<Scalars['BigDecimal']>;
  open_gt?: Maybe<Scalars['BigDecimal']>;
  open_lt?: Maybe<Scalars['BigDecimal']>;
  open_gte?: Maybe<Scalars['BigDecimal']>;
  open_lte?: Maybe<Scalars['BigDecimal']>;
  open_in?: Maybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  openRef?: Maybe<Scalars['String']>;
  openRef_not?: Maybe<Scalars['String']>;
  openRef_gt?: Maybe<Scalars['String']>;
  openRef_lt?: Maybe<Scalars['String']>;
  openRef_gte?: Maybe<Scalars['String']>;
  openRef_lte?: Maybe<Scalars['String']>;
  openRef_in?: Maybe<Array<Scalars['String']>>;
  openRef_not_in?: Maybe<Array<Scalars['String']>>;
  openRef_contains?: Maybe<Scalars['String']>;
  openRef_not_contains?: Maybe<Scalars['String']>;
  openRef_starts_with?: Maybe<Scalars['String']>;
  openRef_not_starts_with?: Maybe<Scalars['String']>;
  openRef_ends_with?: Maybe<Scalars['String']>;
  openRef_not_ends_with?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['BigDecimal']>;
  close_not?: Maybe<Scalars['BigDecimal']>;
  close_gt?: Maybe<Scalars['BigDecimal']>;
  close_lt?: Maybe<Scalars['BigDecimal']>;
  close_gte?: Maybe<Scalars['BigDecimal']>;
  close_lte?: Maybe<Scalars['BigDecimal']>;
  close_in?: Maybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  closeRef?: Maybe<Scalars['String']>;
  closeRef_not?: Maybe<Scalars['String']>;
  closeRef_gt?: Maybe<Scalars['String']>;
  closeRef_lt?: Maybe<Scalars['String']>;
  closeRef_gte?: Maybe<Scalars['String']>;
  closeRef_lte?: Maybe<Scalars['String']>;
  closeRef_in?: Maybe<Array<Scalars['String']>>;
  closeRef_not_in?: Maybe<Array<Scalars['String']>>;
  closeRef_contains?: Maybe<Scalars['String']>;
  closeRef_not_contains?: Maybe<Scalars['String']>;
  closeRef_starts_with?: Maybe<Scalars['String']>;
  closeRef_not_starts_with?: Maybe<Scalars['String']>;
  closeRef_ends_with?: Maybe<Scalars['String']>;
  closeRef_not_ends_with?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['BigDecimal']>;
  low_not?: Maybe<Scalars['BigDecimal']>;
  low_gt?: Maybe<Scalars['BigDecimal']>;
  low_lt?: Maybe<Scalars['BigDecimal']>;
  low_gte?: Maybe<Scalars['BigDecimal']>;
  low_lte?: Maybe<Scalars['BigDecimal']>;
  low_in?: Maybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lowRef?: Maybe<Scalars['String']>;
  lowRef_not?: Maybe<Scalars['String']>;
  lowRef_gt?: Maybe<Scalars['String']>;
  lowRef_lt?: Maybe<Scalars['String']>;
  lowRef_gte?: Maybe<Scalars['String']>;
  lowRef_lte?: Maybe<Scalars['String']>;
  lowRef_in?: Maybe<Array<Scalars['String']>>;
  lowRef_not_in?: Maybe<Array<Scalars['String']>>;
  lowRef_contains?: Maybe<Scalars['String']>;
  lowRef_not_contains?: Maybe<Scalars['String']>;
  lowRef_starts_with?: Maybe<Scalars['String']>;
  lowRef_not_starts_with?: Maybe<Scalars['String']>;
  lowRef_ends_with?: Maybe<Scalars['String']>;
  lowRef_not_ends_with?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['BigDecimal']>;
  high_not?: Maybe<Scalars['BigDecimal']>;
  high_gt?: Maybe<Scalars['BigDecimal']>;
  high_lt?: Maybe<Scalars['BigDecimal']>;
  high_gte?: Maybe<Scalars['BigDecimal']>;
  high_lte?: Maybe<Scalars['BigDecimal']>;
  high_in?: Maybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highRef?: Maybe<Scalars['String']>;
  highRef_not?: Maybe<Scalars['String']>;
  highRef_gt?: Maybe<Scalars['String']>;
  highRef_lt?: Maybe<Scalars['String']>;
  highRef_gte?: Maybe<Scalars['String']>;
  highRef_lte?: Maybe<Scalars['String']>;
  highRef_in?: Maybe<Array<Scalars['String']>>;
  highRef_not_in?: Maybe<Array<Scalars['String']>>;
  highRef_contains?: Maybe<Scalars['String']>;
  highRef_not_contains?: Maybe<Scalars['String']>;
  highRef_starts_with?: Maybe<Scalars['String']>;
  highRef_not_starts_with?: Maybe<Scalars['String']>;
  highRef_ends_with?: Maybe<Scalars['String']>;
  highRef_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MonthlyCurrencyPriceCandle_OrderBy {
  Id = 'id',
  Currency = 'currency',
  Group = 'group',
  From = 'from',
  To = 'to',
  Open = 'open',
  OpenRef = 'openRef',
  Close = 'close',
  CloseRef = 'closeRef',
  Low = 'low',
  LowRef = 'lowRef',
  High = 'high',
  HighRef = 'highRef'
}

export type MonthlyFundState = PeriodicFundStateInterface & {
  __typename?: 'MonthlyFundState';
  id: Scalars['ID'];
  fund: Fund;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: FundState;
  last: FundState;
};

export type MonthlyFundState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['BigInt']>;
  start_not?: Maybe<Scalars['BigInt']>;
  start_gt?: Maybe<Scalars['BigInt']>;
  start_lt?: Maybe<Scalars['BigInt']>;
  start_gte?: Maybe<Scalars['BigInt']>;
  start_lte?: Maybe<Scalars['BigInt']>;
  start_in?: Maybe<Array<Scalars['BigInt']>>;
  start_not_in?: Maybe<Array<Scalars['BigInt']>>;
  end?: Maybe<Scalars['BigInt']>;
  end_not?: Maybe<Scalars['BigInt']>;
  end_gt?: Maybe<Scalars['BigInt']>;
  end_lt?: Maybe<Scalars['BigInt']>;
  end_gte?: Maybe<Scalars['BigInt']>;
  end_lte?: Maybe<Scalars['BigInt']>;
  end_in?: Maybe<Array<Scalars['BigInt']>>;
  end_not_in?: Maybe<Array<Scalars['BigInt']>>;
  first?: Maybe<Scalars['String']>;
  first_not?: Maybe<Scalars['String']>;
  first_gt?: Maybe<Scalars['String']>;
  first_lt?: Maybe<Scalars['String']>;
  first_gte?: Maybe<Scalars['String']>;
  first_lte?: Maybe<Scalars['String']>;
  first_in?: Maybe<Array<Scalars['String']>>;
  first_not_in?: Maybe<Array<Scalars['String']>>;
  first_contains?: Maybe<Scalars['String']>;
  first_not_contains?: Maybe<Scalars['String']>;
  first_starts_with?: Maybe<Scalars['String']>;
  first_not_starts_with?: Maybe<Scalars['String']>;
  first_ends_with?: Maybe<Scalars['String']>;
  first_not_ends_with?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
  last_not?: Maybe<Scalars['String']>;
  last_gt?: Maybe<Scalars['String']>;
  last_lt?: Maybe<Scalars['String']>;
  last_gte?: Maybe<Scalars['String']>;
  last_lte?: Maybe<Scalars['String']>;
  last_in?: Maybe<Array<Scalars['String']>>;
  last_not_in?: Maybe<Array<Scalars['String']>>;
  last_contains?: Maybe<Scalars['String']>;
  last_not_contains?: Maybe<Scalars['String']>;
  last_starts_with?: Maybe<Scalars['String']>;
  last_not_starts_with?: Maybe<Scalars['String']>;
  last_ends_with?: Maybe<Scalars['String']>;
  last_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MonthlyFundState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Start = 'start',
  End = 'end',
  First = 'first',
  Last = 'last'
}

export type MonthlyPriceCandleGroup = {
  __typename?: 'MonthlyPriceCandleGroup';
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  assetCandles: Array<MonthlyAssetPriceCandle>;
  currencyCandles: Array<MonthlyCurrencyPriceCandle>;
};


export type MonthlyPriceCandleGroupAssetCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyAssetPriceCandle_Filter>;
};


export type MonthlyPriceCandleGroupCurrencyCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyCurrencyPriceCandle_Filter>;
};

export type MonthlyPriceCandleGroup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  from?: Maybe<Scalars['BigInt']>;
  from_not?: Maybe<Scalars['BigInt']>;
  from_gt?: Maybe<Scalars['BigInt']>;
  from_lt?: Maybe<Scalars['BigInt']>;
  from_gte?: Maybe<Scalars['BigInt']>;
  from_lte?: Maybe<Scalars['BigInt']>;
  from_in?: Maybe<Array<Scalars['BigInt']>>;
  from_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['BigInt']>;
  to_not?: Maybe<Scalars['BigInt']>;
  to_gt?: Maybe<Scalars['BigInt']>;
  to_lt?: Maybe<Scalars['BigInt']>;
  to_gte?: Maybe<Scalars['BigInt']>;
  to_lte?: Maybe<Scalars['BigInt']>;
  to_in?: Maybe<Array<Scalars['BigInt']>>;
  to_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MonthlyPriceCandleGroup_OrderBy {
  Id = 'id',
  From = 'from',
  To = 'to',
  AssetCandles = 'assetCandles',
  CurrencyCandles = 'currencyCandles'
}

export type MultiLendTrade = Trade & {
  __typename?: 'MultiLendTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmounts: Array<AssetAmount>;
  outgoingAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};


export type MultiLendTradeIncomingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};


export type MultiLendTradeOutgoingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type MultiLendTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MultiLendTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmounts = 'incomingAssetAmounts',
  OutgoingAssetAmounts = 'outgoingAssetAmounts',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type MultiRedeemTrade = Trade & {
  __typename?: 'MultiRedeemTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmounts: Array<AssetAmount>;
  outgoingAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};


export type MultiRedeemTradeIncomingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};


export type MultiRedeemTradeOutgoingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type MultiRedeemTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MultiRedeemTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmounts = 'incomingAssetAmounts',
  OutgoingAssetAmounts = 'outgoingAssetAmounts',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type MultiTokenSwapTrade = Trade & {
  __typename?: 'MultiTokenSwapTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmounts: Array<AssetAmount>;
  outgoingAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};


export type MultiTokenSwapTradeIncomingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};


export type MultiTokenSwapTradeOutgoingAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type MultiTokenSwapTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MultiTokenSwapTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmounts = 'incomingAssetAmounts',
  OutgoingAssetAmounts = 'outgoingAssetAmounts',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type Network = {
  __typename?: 'Network';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  currentRelease?: Maybe<Release>;
  releases?: Maybe<Array<Release>>;
  state: NetworkState;
  stateHistory: Array<NetworkState>;
};


export type NetworkReleasesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Release_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Release_Filter>;
};


export type NetworkStateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkState_Filter>;
};

export type NetworkAssetHolding = {
  __typename?: 'NetworkAssetHolding';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  asset: Asset;
  amount: Scalars['BigDecimal'];
};

export type NetworkAssetHolding_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum NetworkAssetHolding_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Asset = 'asset',
  Amount = 'amount'
}

export type NetworkEventInterface = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type NetworkEventInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NetworkEventInterface_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type NetworkState = {
  __typename?: 'NetworkState';
  id: Scalars['ID'];
  network: Network;
  timestamp: Scalars['BigInt'];
  assetHoldings: Array<NetworkAssetHolding>;
  funds: Scalars['Int'];
  managers: Scalars['Int'];
  investors: Scalars['Int'];
  investments: Scalars['Int'];
};


export type NetworkStateAssetHoldingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkAssetHolding_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkAssetHolding_Filter>;
};

export type NetworkState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  network?: Maybe<Scalars['String']>;
  network_not?: Maybe<Scalars['String']>;
  network_gt?: Maybe<Scalars['String']>;
  network_lt?: Maybe<Scalars['String']>;
  network_gte?: Maybe<Scalars['String']>;
  network_lte?: Maybe<Scalars['String']>;
  network_in?: Maybe<Array<Scalars['String']>>;
  network_not_in?: Maybe<Array<Scalars['String']>>;
  network_contains?: Maybe<Scalars['String']>;
  network_not_contains?: Maybe<Scalars['String']>;
  network_starts_with?: Maybe<Scalars['String']>;
  network_not_starts_with?: Maybe<Scalars['String']>;
  network_ends_with?: Maybe<Scalars['String']>;
  network_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  assetHoldings?: Maybe<Array<Scalars['String']>>;
  assetHoldings_not?: Maybe<Array<Scalars['String']>>;
  assetHoldings_contains?: Maybe<Array<Scalars['String']>>;
  assetHoldings_not_contains?: Maybe<Array<Scalars['String']>>;
  funds?: Maybe<Scalars['Int']>;
  funds_not?: Maybe<Scalars['Int']>;
  funds_gt?: Maybe<Scalars['Int']>;
  funds_lt?: Maybe<Scalars['Int']>;
  funds_gte?: Maybe<Scalars['Int']>;
  funds_lte?: Maybe<Scalars['Int']>;
  funds_in?: Maybe<Array<Scalars['Int']>>;
  funds_not_in?: Maybe<Array<Scalars['Int']>>;
  managers?: Maybe<Scalars['Int']>;
  managers_not?: Maybe<Scalars['Int']>;
  managers_gt?: Maybe<Scalars['Int']>;
  managers_lt?: Maybe<Scalars['Int']>;
  managers_gte?: Maybe<Scalars['Int']>;
  managers_lte?: Maybe<Scalars['Int']>;
  managers_in?: Maybe<Array<Scalars['Int']>>;
  managers_not_in?: Maybe<Array<Scalars['Int']>>;
  investors?: Maybe<Scalars['Int']>;
  investors_not?: Maybe<Scalars['Int']>;
  investors_gt?: Maybe<Scalars['Int']>;
  investors_lt?: Maybe<Scalars['Int']>;
  investors_gte?: Maybe<Scalars['Int']>;
  investors_lte?: Maybe<Scalars['Int']>;
  investors_in?: Maybe<Array<Scalars['Int']>>;
  investors_not_in?: Maybe<Array<Scalars['Int']>>;
  investments?: Maybe<Scalars['Int']>;
  investments_not?: Maybe<Scalars['Int']>;
  investments_gt?: Maybe<Scalars['Int']>;
  investments_lt?: Maybe<Scalars['Int']>;
  investments_gte?: Maybe<Scalars['Int']>;
  investments_lte?: Maybe<Scalars['Int']>;
  investments_in?: Maybe<Array<Scalars['Int']>>;
  investments_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum NetworkState_OrderBy {
  Id = 'id',
  Network = 'network',
  Timestamp = 'timestamp',
  AssetHoldings = 'assetHoldings',
  Funds = 'funds',
  Managers = 'managers',
  Investors = 'investors',
  Investments = 'investments'
}

export type Network_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentRelease?: Maybe<Scalars['String']>;
  currentRelease_not?: Maybe<Scalars['String']>;
  currentRelease_gt?: Maybe<Scalars['String']>;
  currentRelease_lt?: Maybe<Scalars['String']>;
  currentRelease_gte?: Maybe<Scalars['String']>;
  currentRelease_lte?: Maybe<Scalars['String']>;
  currentRelease_in?: Maybe<Array<Scalars['String']>>;
  currentRelease_not_in?: Maybe<Array<Scalars['String']>>;
  currentRelease_contains?: Maybe<Scalars['String']>;
  currentRelease_not_contains?: Maybe<Scalars['String']>;
  currentRelease_starts_with?: Maybe<Scalars['String']>;
  currentRelease_not_starts_with?: Maybe<Scalars['String']>;
  currentRelease_ends_with?: Maybe<Scalars['String']>;
  currentRelease_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Network_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  CurrentRelease = 'currentRelease',
  Releases = 'releases',
  State = 'state',
  StateHistory = 'stateHistory'
}

export type NewFundCreatedEvent = EventInterface & FundEventInterface & {
  __typename?: 'NewFundCreatedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  comptrollerProxy: Scalars['String'];
  vaultProxy: Fund;
  creator: Account;
  fundOwner: Account;
  fundName: Scalars['String'];
  denominationAsset: Asset;
  sharesActionTimelock: Scalars['BigInt'];
  feeManagerConfigData: Scalars['String'];
  policyManagerConfigData: Scalars['String'];
  transaction: Transaction;
};

export type NewFundCreatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  vaultProxy?: Maybe<Scalars['String']>;
  vaultProxy_not?: Maybe<Scalars['String']>;
  vaultProxy_gt?: Maybe<Scalars['String']>;
  vaultProxy_lt?: Maybe<Scalars['String']>;
  vaultProxy_gte?: Maybe<Scalars['String']>;
  vaultProxy_lte?: Maybe<Scalars['String']>;
  vaultProxy_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_not_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_contains?: Maybe<Scalars['String']>;
  vaultProxy_not_contains?: Maybe<Scalars['String']>;
  vaultProxy_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_not_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_ends_with?: Maybe<Scalars['String']>;
  vaultProxy_not_ends_with?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creator_not?: Maybe<Scalars['String']>;
  creator_gt?: Maybe<Scalars['String']>;
  creator_lt?: Maybe<Scalars['String']>;
  creator_gte?: Maybe<Scalars['String']>;
  creator_lte?: Maybe<Scalars['String']>;
  creator_in?: Maybe<Array<Scalars['String']>>;
  creator_not_in?: Maybe<Array<Scalars['String']>>;
  creator_contains?: Maybe<Scalars['String']>;
  creator_not_contains?: Maybe<Scalars['String']>;
  creator_starts_with?: Maybe<Scalars['String']>;
  creator_not_starts_with?: Maybe<Scalars['String']>;
  creator_ends_with?: Maybe<Scalars['String']>;
  creator_not_ends_with?: Maybe<Scalars['String']>;
  fundOwner?: Maybe<Scalars['String']>;
  fundOwner_not?: Maybe<Scalars['String']>;
  fundOwner_gt?: Maybe<Scalars['String']>;
  fundOwner_lt?: Maybe<Scalars['String']>;
  fundOwner_gte?: Maybe<Scalars['String']>;
  fundOwner_lte?: Maybe<Scalars['String']>;
  fundOwner_in?: Maybe<Array<Scalars['String']>>;
  fundOwner_not_in?: Maybe<Array<Scalars['String']>>;
  fundOwner_contains?: Maybe<Scalars['String']>;
  fundOwner_not_contains?: Maybe<Scalars['String']>;
  fundOwner_starts_with?: Maybe<Scalars['String']>;
  fundOwner_not_starts_with?: Maybe<Scalars['String']>;
  fundOwner_ends_with?: Maybe<Scalars['String']>;
  fundOwner_not_ends_with?: Maybe<Scalars['String']>;
  fundName?: Maybe<Scalars['String']>;
  fundName_not?: Maybe<Scalars['String']>;
  fundName_gt?: Maybe<Scalars['String']>;
  fundName_lt?: Maybe<Scalars['String']>;
  fundName_gte?: Maybe<Scalars['String']>;
  fundName_lte?: Maybe<Scalars['String']>;
  fundName_in?: Maybe<Array<Scalars['String']>>;
  fundName_not_in?: Maybe<Array<Scalars['String']>>;
  fundName_contains?: Maybe<Scalars['String']>;
  fundName_not_contains?: Maybe<Scalars['String']>;
  fundName_starts_with?: Maybe<Scalars['String']>;
  fundName_not_starts_with?: Maybe<Scalars['String']>;
  fundName_ends_with?: Maybe<Scalars['String']>;
  fundName_not_ends_with?: Maybe<Scalars['String']>;
  denominationAsset?: Maybe<Scalars['String']>;
  denominationAsset_not?: Maybe<Scalars['String']>;
  denominationAsset_gt?: Maybe<Scalars['String']>;
  denominationAsset_lt?: Maybe<Scalars['String']>;
  denominationAsset_gte?: Maybe<Scalars['String']>;
  denominationAsset_lte?: Maybe<Scalars['String']>;
  denominationAsset_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_not_in?: Maybe<Array<Scalars['String']>>;
  denominationAsset_contains?: Maybe<Scalars['String']>;
  denominationAsset_not_contains?: Maybe<Scalars['String']>;
  denominationAsset_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_not_starts_with?: Maybe<Scalars['String']>;
  denominationAsset_ends_with?: Maybe<Scalars['String']>;
  denominationAsset_not_ends_with?: Maybe<Scalars['String']>;
  sharesActionTimelock?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_not?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lt?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_gte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_lte?: Maybe<Scalars['BigInt']>;
  sharesActionTimelock_in?: Maybe<Array<Scalars['BigInt']>>;
  sharesActionTimelock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  feeManagerConfigData?: Maybe<Scalars['String']>;
  feeManagerConfigData_not?: Maybe<Scalars['String']>;
  feeManagerConfigData_gt?: Maybe<Scalars['String']>;
  feeManagerConfigData_lt?: Maybe<Scalars['String']>;
  feeManagerConfigData_gte?: Maybe<Scalars['String']>;
  feeManagerConfigData_lte?: Maybe<Scalars['String']>;
  feeManagerConfigData_in?: Maybe<Array<Scalars['String']>>;
  feeManagerConfigData_not_in?: Maybe<Array<Scalars['String']>>;
  feeManagerConfigData_contains?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_contains?: Maybe<Scalars['String']>;
  feeManagerConfigData_starts_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_starts_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_ends_with?: Maybe<Scalars['String']>;
  feeManagerConfigData_not_ends_with?: Maybe<Scalars['String']>;
  policyManagerConfigData?: Maybe<Scalars['String']>;
  policyManagerConfigData_not?: Maybe<Scalars['String']>;
  policyManagerConfigData_gt?: Maybe<Scalars['String']>;
  policyManagerConfigData_lt?: Maybe<Scalars['String']>;
  policyManagerConfigData_gte?: Maybe<Scalars['String']>;
  policyManagerConfigData_lte?: Maybe<Scalars['String']>;
  policyManagerConfigData_in?: Maybe<Array<Scalars['String']>>;
  policyManagerConfigData_not_in?: Maybe<Array<Scalars['String']>>;
  policyManagerConfigData_contains?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_contains?: Maybe<Scalars['String']>;
  policyManagerConfigData_starts_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_starts_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_ends_with?: Maybe<Scalars['String']>;
  policyManagerConfigData_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NewFundCreatedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  ComptrollerProxy = 'comptrollerProxy',
  VaultProxy = 'vaultProxy',
  Creator = 'creator',
  FundOwner = 'fundOwner',
  FundName = 'fundName',
  DenominationAsset = 'denominationAsset',
  SharesActionTimelock = 'sharesActionTimelock',
  FeeManagerConfigData = 'feeManagerConfigData',
  PolicyManagerConfigData = 'policyManagerConfigData',
  Transaction = 'transaction'
}

export type NominatedOwnerRemovedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'NominatedOwnerRemovedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  nominatedOwner: Scalars['String'];
};

export type NominatedOwnerRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  nominatedOwner?: Maybe<Scalars['String']>;
  nominatedOwner_not?: Maybe<Scalars['String']>;
  nominatedOwner_gt?: Maybe<Scalars['String']>;
  nominatedOwner_lt?: Maybe<Scalars['String']>;
  nominatedOwner_gte?: Maybe<Scalars['String']>;
  nominatedOwner_lte?: Maybe<Scalars['String']>;
  nominatedOwner_in?: Maybe<Array<Scalars['String']>>;
  nominatedOwner_not_in?: Maybe<Array<Scalars['String']>>;
  nominatedOwner_contains?: Maybe<Scalars['String']>;
  nominatedOwner_not_contains?: Maybe<Scalars['String']>;
  nominatedOwner_starts_with?: Maybe<Scalars['String']>;
  nominatedOwner_not_starts_with?: Maybe<Scalars['String']>;
  nominatedOwner_ends_with?: Maybe<Scalars['String']>;
  nominatedOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NominatedOwnerRemovedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  NominatedOwner = 'nominatedOwner'
}

export type NominatedOwnerSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'NominatedOwnerSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  nominatedOwner: Scalars['String'];
};

export type NominatedOwnerSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  nominatedOwner?: Maybe<Scalars['String']>;
  nominatedOwner_not?: Maybe<Scalars['String']>;
  nominatedOwner_gt?: Maybe<Scalars['String']>;
  nominatedOwner_lt?: Maybe<Scalars['String']>;
  nominatedOwner_gte?: Maybe<Scalars['String']>;
  nominatedOwner_lte?: Maybe<Scalars['String']>;
  nominatedOwner_in?: Maybe<Array<Scalars['String']>>;
  nominatedOwner_not_in?: Maybe<Array<Scalars['String']>>;
  nominatedOwner_contains?: Maybe<Scalars['String']>;
  nominatedOwner_not_contains?: Maybe<Scalars['String']>;
  nominatedOwner_starts_with?: Maybe<Scalars['String']>;
  nominatedOwner_not_starts_with?: Maybe<Scalars['String']>;
  nominatedOwner_ends_with?: Maybe<Scalars['String']>;
  nominatedOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum NominatedOwnerSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  NominatedOwner = 'nominatedOwner'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OverridePauseSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'OverridePauseSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  overridePause: Scalars['Boolean'];
};

export type OverridePauseSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  overridePause?: Maybe<Scalars['Boolean']>;
  overridePause_not?: Maybe<Scalars['Boolean']>;
  overridePause_in?: Maybe<Array<Scalars['Boolean']>>;
  overridePause_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum OverridePauseSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  OverridePause = 'overridePause'
}

export type OwnerSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'OwnerSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevOwner?: Maybe<Account>;
  nextOwner: Account;
};

export type OwnerSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevOwner?: Maybe<Scalars['String']>;
  prevOwner_not?: Maybe<Scalars['String']>;
  prevOwner_gt?: Maybe<Scalars['String']>;
  prevOwner_lt?: Maybe<Scalars['String']>;
  prevOwner_gte?: Maybe<Scalars['String']>;
  prevOwner_lte?: Maybe<Scalars['String']>;
  prevOwner_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_not_in?: Maybe<Array<Scalars['String']>>;
  prevOwner_contains?: Maybe<Scalars['String']>;
  prevOwner_not_contains?: Maybe<Scalars['String']>;
  prevOwner_starts_with?: Maybe<Scalars['String']>;
  prevOwner_not_starts_with?: Maybe<Scalars['String']>;
  prevOwner_ends_with?: Maybe<Scalars['String']>;
  prevOwner_not_ends_with?: Maybe<Scalars['String']>;
  nextOwner?: Maybe<Scalars['String']>;
  nextOwner_not?: Maybe<Scalars['String']>;
  nextOwner_gt?: Maybe<Scalars['String']>;
  nextOwner_lt?: Maybe<Scalars['String']>;
  nextOwner_gte?: Maybe<Scalars['String']>;
  nextOwner_lte?: Maybe<Scalars['String']>;
  nextOwner_in?: Maybe<Array<Scalars['String']>>;
  nextOwner_not_in?: Maybe<Array<Scalars['String']>>;
  nextOwner_contains?: Maybe<Scalars['String']>;
  nextOwner_not_contains?: Maybe<Scalars['String']>;
  nextOwner_starts_with?: Maybe<Scalars['String']>;
  nextOwner_not_starts_with?: Maybe<Scalars['String']>;
  nextOwner_ends_with?: Maybe<Scalars['String']>;
  nextOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum OwnerSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevOwner = 'prevOwner',
  NextOwner = 'nextOwner'
}

export type OwnershipTransferredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'OwnershipTransferredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  previousOwner: Scalars['String'];
  newOwner: Scalars['String'];
};

export type OwnershipTransferredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  previousOwner?: Maybe<Scalars['String']>;
  previousOwner_not?: Maybe<Scalars['String']>;
  previousOwner_gt?: Maybe<Scalars['String']>;
  previousOwner_lt?: Maybe<Scalars['String']>;
  previousOwner_gte?: Maybe<Scalars['String']>;
  previousOwner_lte?: Maybe<Scalars['String']>;
  previousOwner_in?: Maybe<Array<Scalars['String']>>;
  previousOwner_not_in?: Maybe<Array<Scalars['String']>>;
  previousOwner_contains?: Maybe<Scalars['String']>;
  previousOwner_not_contains?: Maybe<Scalars['String']>;
  previousOwner_starts_with?: Maybe<Scalars['String']>;
  previousOwner_not_starts_with?: Maybe<Scalars['String']>;
  previousOwner_ends_with?: Maybe<Scalars['String']>;
  previousOwner_not_ends_with?: Maybe<Scalars['String']>;
  newOwner?: Maybe<Scalars['String']>;
  newOwner_not?: Maybe<Scalars['String']>;
  newOwner_gt?: Maybe<Scalars['String']>;
  newOwner_lt?: Maybe<Scalars['String']>;
  newOwner_gte?: Maybe<Scalars['String']>;
  newOwner_lte?: Maybe<Scalars['String']>;
  newOwner_in?: Maybe<Array<Scalars['String']>>;
  newOwner_not_in?: Maybe<Array<Scalars['String']>>;
  newOwner_contains?: Maybe<Scalars['String']>;
  newOwner_not_contains?: Maybe<Scalars['String']>;
  newOwner_starts_with?: Maybe<Scalars['String']>;
  newOwner_not_starts_with?: Maybe<Scalars['String']>;
  newOwner_ends_with?: Maybe<Scalars['String']>;
  newOwner_not_ends_with?: Maybe<Scalars['String']>;
};

export enum OwnershipTransferredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PreviousOwner = 'previousOwner',
  NewOwner = 'newOwner'
}

export type PerformanceFeeActivatedForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'PerformanceFeeActivatedForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  highWaterMark: Scalars['BigDecimal'];
};

export type PerformanceFeeActivatedForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  highWaterMark?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_not?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_gt?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_lt?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_gte?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_lte?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highWaterMark_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PerformanceFeeActivatedForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  HighWaterMark = 'highWaterMark'
}

export type PerformanceFeePaidOutEvent = EventInterface & FundEventInterface & {
  __typename?: 'PerformanceFeePaidOutEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  prevHighWaterMark: Scalars['BigDecimal'];
  nextHighWaterMark: Scalars['BigDecimal'];
};

export type PerformanceFeePaidOutEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevHighWaterMark?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_not?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_gt?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_lt?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_gte?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_lte?: Maybe<Scalars['BigDecimal']>;
  prevHighWaterMark_in?: Maybe<Array<Scalars['BigDecimal']>>;
  prevHighWaterMark_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextHighWaterMark?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_not?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_gt?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_lt?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_gte?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_lte?: Maybe<Scalars['BigDecimal']>;
  nextHighWaterMark_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextHighWaterMark_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PerformanceFeePaidOutEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  PrevHighWaterMark = 'prevHighWaterMark',
  NextHighWaterMark = 'nextHighWaterMark'
}

export type PerformanceFeePerformanceUpdatedEvent = EventInterface & FundEventInterface & {
  __typename?: 'PerformanceFeePerformanceUpdatedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  prevAggregateValueDue: Scalars['BigDecimal'];
  nextAggregateValueDue: Scalars['BigDecimal'];
  sharesOutstandingDiff: Scalars['BigDecimal'];
};

export type PerformanceFeePerformanceUpdatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevAggregateValueDue?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_not?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_gt?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_lt?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_gte?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_lte?: Maybe<Scalars['BigDecimal']>;
  prevAggregateValueDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  prevAggregateValueDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextAggregateValueDue?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_not?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_gt?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_lt?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_gte?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_lte?: Maybe<Scalars['BigDecimal']>;
  nextAggregateValueDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextAggregateValueDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesOutstandingDiff?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_not?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_gt?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_lt?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_gte?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_lte?: Maybe<Scalars['BigDecimal']>;
  sharesOutstandingDiff_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesOutstandingDiff_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PerformanceFeePerformanceUpdatedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  PrevAggregateValueDue = 'prevAggregateValueDue',
  NextAggregateValueDue = 'nextAggregateValueDue',
  SharesOutstandingDiff = 'sharesOutstandingDiff'
}

export type PerformanceFeeSetting = FeeSettingInterface & {
  __typename?: 'PerformanceFeeSetting';
  id: Scalars['ID'];
  fee: Fee;
  fund: Fund;
  rate: Scalars['BigDecimal'];
  period: Scalars['BigInt'];
  activated: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  events: Array<FundEventInterface>;
};


export type PerformanceFeeSettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type PerformanceFeeSetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  period?: Maybe<Scalars['BigInt']>;
  period_not?: Maybe<Scalars['BigInt']>;
  period_gt?: Maybe<Scalars['BigInt']>;
  period_lt?: Maybe<Scalars['BigInt']>;
  period_gte?: Maybe<Scalars['BigInt']>;
  period_lte?: Maybe<Scalars['BigInt']>;
  period_in?: Maybe<Array<Scalars['BigInt']>>;
  period_not_in?: Maybe<Array<Scalars['BigInt']>>;
  activated?: Maybe<Scalars['BigInt']>;
  activated_not?: Maybe<Scalars['BigInt']>;
  activated_gt?: Maybe<Scalars['BigInt']>;
  activated_lt?: Maybe<Scalars['BigInt']>;
  activated_gte?: Maybe<Scalars['BigInt']>;
  activated_lte?: Maybe<Scalars['BigInt']>;
  activated_in?: Maybe<Array<Scalars['BigInt']>>;
  activated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum PerformanceFeeSetting_OrderBy {
  Id = 'id',
  Fee = 'fee',
  Fund = 'fund',
  Rate = 'rate',
  Period = 'period',
  Activated = 'activated',
  Timestamp = 'timestamp',
  Events = 'events'
}

export type PerformanceFeeSettingsAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'PerformanceFeeSettingsAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  rate: Scalars['BigDecimal'];
  period: Scalars['BigInt'];
};

export type PerformanceFeeSettingsAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  period?: Maybe<Scalars['BigInt']>;
  period_not?: Maybe<Scalars['BigInt']>;
  period_gt?: Maybe<Scalars['BigInt']>;
  period_lt?: Maybe<Scalars['BigInt']>;
  period_gte?: Maybe<Scalars['BigInt']>;
  period_lte?: Maybe<Scalars['BigInt']>;
  period_in?: Maybe<Array<Scalars['BigInt']>>;
  period_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PerformanceFeeSettingsAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  Rate = 'rate',
  Period = 'period'
}

export type PerformanceFeeSharePriceUpdatedEvent = EventInterface & FundEventInterface & {
  __typename?: 'PerformanceFeeSharePriceUpdatedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  comptrollerProxy: Scalars['String'];
  prevSharePrice: Scalars['BigDecimal'];
  nextSharePrice: Scalars['BigDecimal'];
};

export type PerformanceFeeSharePriceUpdatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  prevSharePrice?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_not?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_gt?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_lt?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_gte?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_lte?: Maybe<Scalars['BigDecimal']>;
  prevSharePrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  prevSharePrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextSharePrice?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_not?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_gt?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_lt?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_gte?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_lte?: Maybe<Scalars['BigDecimal']>;
  nextSharePrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  nextSharePrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PerformanceFeeSharePriceUpdatedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ComptrollerProxy = 'comptrollerProxy',
  PrevSharePrice = 'prevSharePrice',
  NextSharePrice = 'nextSharePrice'
}

export type PerformanceFeeState = FundStateInterface & IndividualFeeStateInterface & {
  __typename?: 'PerformanceFeeState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  fee: Fee;
  lastPaid: Scalars['BigInt'];
  grossSharePrice: Scalars['BigDecimal'];
  aggregateValueDue: Scalars['BigDecimal'];
  highWaterMark: Scalars['BigDecimal'];
  sharesOutstanding: Scalars['BigDecimal'];
  events: Array<FundEventInterface>;
};


export type PerformanceFeeStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type PerformanceFeeState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  lastPaid?: Maybe<Scalars['BigInt']>;
  lastPaid_not?: Maybe<Scalars['BigInt']>;
  lastPaid_gt?: Maybe<Scalars['BigInt']>;
  lastPaid_lt?: Maybe<Scalars['BigInt']>;
  lastPaid_gte?: Maybe<Scalars['BigInt']>;
  lastPaid_lte?: Maybe<Scalars['BigInt']>;
  lastPaid_in?: Maybe<Array<Scalars['BigInt']>>;
  lastPaid_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossSharePrice?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_not?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_gt?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_lt?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_gte?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_lte?: Maybe<Scalars['BigDecimal']>;
  grossSharePrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  grossSharePrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  aggregateValueDue?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_not?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_gt?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_lt?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_gte?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_lte?: Maybe<Scalars['BigDecimal']>;
  aggregateValueDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  aggregateValueDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highWaterMark?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_not?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_gt?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_lt?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_gte?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_lte?: Maybe<Scalars['BigDecimal']>;
  highWaterMark_in?: Maybe<Array<Scalars['BigDecimal']>>;
  highWaterMark_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesOutstanding?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_not?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_gt?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_lt?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_gte?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_lte?: Maybe<Scalars['BigDecimal']>;
  sharesOutstanding_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesOutstanding_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum PerformanceFeeState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Fee = 'fee',
  LastPaid = 'lastPaid',
  GrossSharePrice = 'grossSharePrice',
  AggregateValueDue = 'aggregateValueDue',
  HighWaterMark = 'highWaterMark',
  SharesOutstanding = 'sharesOutstanding',
  Events = 'events'
}

export type PeriodicFundStateInterface = {
  id: Scalars['ID'];
  fund: Fund;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: FundState;
  last: FundState;
};

export type PeriodicFundStateInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['BigInt']>;
  start_not?: Maybe<Scalars['BigInt']>;
  start_gt?: Maybe<Scalars['BigInt']>;
  start_lt?: Maybe<Scalars['BigInt']>;
  start_gte?: Maybe<Scalars['BigInt']>;
  start_lte?: Maybe<Scalars['BigInt']>;
  start_in?: Maybe<Array<Scalars['BigInt']>>;
  start_not_in?: Maybe<Array<Scalars['BigInt']>>;
  end?: Maybe<Scalars['BigInt']>;
  end_not?: Maybe<Scalars['BigInt']>;
  end_gt?: Maybe<Scalars['BigInt']>;
  end_lt?: Maybe<Scalars['BigInt']>;
  end_gte?: Maybe<Scalars['BigInt']>;
  end_lte?: Maybe<Scalars['BigInt']>;
  end_in?: Maybe<Array<Scalars['BigInt']>>;
  end_not_in?: Maybe<Array<Scalars['BigInt']>>;
  first?: Maybe<Scalars['String']>;
  first_not?: Maybe<Scalars['String']>;
  first_gt?: Maybe<Scalars['String']>;
  first_lt?: Maybe<Scalars['String']>;
  first_gte?: Maybe<Scalars['String']>;
  first_lte?: Maybe<Scalars['String']>;
  first_in?: Maybe<Array<Scalars['String']>>;
  first_not_in?: Maybe<Array<Scalars['String']>>;
  first_contains?: Maybe<Scalars['String']>;
  first_not_contains?: Maybe<Scalars['String']>;
  first_starts_with?: Maybe<Scalars['String']>;
  first_not_starts_with?: Maybe<Scalars['String']>;
  first_ends_with?: Maybe<Scalars['String']>;
  first_not_ends_with?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
  last_not?: Maybe<Scalars['String']>;
  last_gt?: Maybe<Scalars['String']>;
  last_lt?: Maybe<Scalars['String']>;
  last_gte?: Maybe<Scalars['String']>;
  last_lte?: Maybe<Scalars['String']>;
  last_in?: Maybe<Array<Scalars['String']>>;
  last_not_in?: Maybe<Array<Scalars['String']>>;
  last_contains?: Maybe<Scalars['String']>;
  last_not_contains?: Maybe<Scalars['String']>;
  last_starts_with?: Maybe<Scalars['String']>;
  last_not_starts_with?: Maybe<Scalars['String']>;
  last_ends_with?: Maybe<Scalars['String']>;
  last_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PeriodicFundStateInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Start = 'start',
  End = 'end',
  First = 'first',
  Last = 'last'
}

export type Policy = {
  __typename?: 'Policy';
  id: Scalars['ID'];
  policyManager: PolicyManager;
  identifier: Scalars['String'];
  settings: Array<PolicySettingInterface>;
};


export type PolicySettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicySettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicySettingInterface_Filter>;
};

export type PolicyDeregisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'PolicyDeregisteredEvent';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  policy: Policy;
};

export type PolicyDeregisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PolicyDeregisteredEvent_OrderBy {
  Id = 'id',
  Identifier = 'identifier',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Policy = 'policy'
}

export type PolicyDisabledForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'PolicyDisabledForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  policy: Policy;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type PolicyDisabledForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PolicyDisabledForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Policy = 'policy',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type PolicyEnabledForFundEvent = EventInterface & FundEventInterface & {
  __typename?: 'PolicyEnabledForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  policy: Policy;
  settingsData: Scalars['String'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type PolicyEnabledForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  settingsData?: Maybe<Scalars['String']>;
  settingsData_not?: Maybe<Scalars['String']>;
  settingsData_gt?: Maybe<Scalars['String']>;
  settingsData_lt?: Maybe<Scalars['String']>;
  settingsData_gte?: Maybe<Scalars['String']>;
  settingsData_lte?: Maybe<Scalars['String']>;
  settingsData_in?: Maybe<Array<Scalars['String']>>;
  settingsData_not_in?: Maybe<Array<Scalars['String']>>;
  settingsData_contains?: Maybe<Scalars['String']>;
  settingsData_not_contains?: Maybe<Scalars['String']>;
  settingsData_starts_with?: Maybe<Scalars['String']>;
  settingsData_not_starts_with?: Maybe<Scalars['String']>;
  settingsData_ends_with?: Maybe<Scalars['String']>;
  settingsData_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PolicyEnabledForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Policy = 'policy',
  SettingsData = 'settingsData',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export enum PolicyHook {
  BuySharesSetup = 'BuySharesSetup',
  PreBuyShares = 'PreBuyShares',
  PostBuyShares = 'PostBuyShares',
  BuySharesCompleted = 'BuySharesCompleted',
  PreCallOnIntegration = 'PreCallOnIntegration',
  PostCallOnIntegration = 'PostCallOnIntegration'
}

export type PolicyManager = {
  __typename?: 'PolicyManager';
  id: Scalars['ID'];
  policies: Array<Policy>;
};


export type PolicyManagerPoliciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Policy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Policy_Filter>;
};

export type PolicyManager_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum PolicyManager_OrderBy {
  Id = 'id',
  Policies = 'policies'
}

export type PolicyRegisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'PolicyRegisteredEvent';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  policy: Policy;
  implementedHooks: Array<PolicyHook>;
};

export type PolicyRegisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  implementedHooks?: Maybe<Array<PolicyHook>>;
  implementedHooks_not?: Maybe<Array<PolicyHook>>;
  implementedHooks_contains?: Maybe<Array<PolicyHook>>;
  implementedHooks_not_contains?: Maybe<Array<PolicyHook>>;
};

export enum PolicyRegisteredEvent_OrderBy {
  Id = 'id',
  Identifier = 'identifier',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Policy = 'policy',
  ImplementedHooks = 'implementedHooks'
}

export type PolicySettingInterface = {
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type PolicySettingInterfaceEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type PolicySettingInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum PolicySettingInterface_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type Policy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policyManager?: Maybe<Scalars['String']>;
  policyManager_not?: Maybe<Scalars['String']>;
  policyManager_gt?: Maybe<Scalars['String']>;
  policyManager_lt?: Maybe<Scalars['String']>;
  policyManager_gte?: Maybe<Scalars['String']>;
  policyManager_lte?: Maybe<Scalars['String']>;
  policyManager_in?: Maybe<Array<Scalars['String']>>;
  policyManager_not_in?: Maybe<Array<Scalars['String']>>;
  policyManager_contains?: Maybe<Scalars['String']>;
  policyManager_not_contains?: Maybe<Scalars['String']>;
  policyManager_starts_with?: Maybe<Scalars['String']>;
  policyManager_not_starts_with?: Maybe<Scalars['String']>;
  policyManager_ends_with?: Maybe<Scalars['String']>;
  policyManager_not_ends_with?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_gt?: Maybe<Scalars['String']>;
  identifier_lt?: Maybe<Scalars['String']>;
  identifier_gte?: Maybe<Scalars['String']>;
  identifier_lte?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Scalars['String']>>;
  identifier_not_in?: Maybe<Array<Scalars['String']>>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Policy_OrderBy {
  Id = 'id',
  PolicyManager = 'policyManager',
  Identifier = 'identifier',
  Settings = 'settings'
}

export type PortfolioState = FundStateInterface & {
  __typename?: 'PortfolioState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  holdings: Array<HoldingState>;
  events: Array<FundEventInterface>;
};


export type PortfolioStateHoldingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HoldingState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HoldingState_Filter>;
};


export type PortfolioStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type PortfolioState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  holdings?: Maybe<Array<Scalars['String']>>;
  holdings_not?: Maybe<Array<Scalars['String']>>;
  holdings_contains?: Maybe<Array<Scalars['String']>>;
  holdings_not_contains?: Maybe<Array<Scalars['String']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum PortfolioState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Holdings = 'holdings',
  Events = 'events'
}

export type PreRedeemSharesHookFailedEvent = EventInterface & FundEventInterface & {
  __typename?: 'PreRedeemSharesHookFailedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  sharesQuantity: Scalars['BigDecimal'];
  redeemer: Account;
  failureReturnData: Scalars['String'];
  transaction: Transaction;
};

export type PreRedeemSharesHookFailedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sharesQuantity?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_not?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lt?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_gte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_lte?: Maybe<Scalars['BigDecimal']>;
  sharesQuantity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesQuantity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  redeemer?: Maybe<Scalars['String']>;
  redeemer_not?: Maybe<Scalars['String']>;
  redeemer_gt?: Maybe<Scalars['String']>;
  redeemer_lt?: Maybe<Scalars['String']>;
  redeemer_gte?: Maybe<Scalars['String']>;
  redeemer_lte?: Maybe<Scalars['String']>;
  redeemer_in?: Maybe<Array<Scalars['String']>>;
  redeemer_not_in?: Maybe<Array<Scalars['String']>>;
  redeemer_contains?: Maybe<Scalars['String']>;
  redeemer_not_contains?: Maybe<Scalars['String']>;
  redeemer_starts_with?: Maybe<Scalars['String']>;
  redeemer_not_starts_with?: Maybe<Scalars['String']>;
  redeemer_ends_with?: Maybe<Scalars['String']>;
  redeemer_not_ends_with?: Maybe<Scalars['String']>;
  failureReturnData?: Maybe<Scalars['String']>;
  failureReturnData_not?: Maybe<Scalars['String']>;
  failureReturnData_gt?: Maybe<Scalars['String']>;
  failureReturnData_lt?: Maybe<Scalars['String']>;
  failureReturnData_gte?: Maybe<Scalars['String']>;
  failureReturnData_lte?: Maybe<Scalars['String']>;
  failureReturnData_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_not_in?: Maybe<Array<Scalars['String']>>;
  failureReturnData_contains?: Maybe<Scalars['String']>;
  failureReturnData_not_contains?: Maybe<Scalars['String']>;
  failureReturnData_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_not_starts_with?: Maybe<Scalars['String']>;
  failureReturnData_ends_with?: Maybe<Scalars['String']>;
  failureReturnData_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PreRedeemSharesHookFailedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  SharesQuantity = 'sharesQuantity',
  Redeemer = 'redeemer',
  FailureReturnData = 'failureReturnData',
  Transaction = 'transaction'
}

export type PrimitiveAddedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'PrimitiveAddedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  primitive: Asset;
  priceFeed: Scalars['String'];
  rateAsset: Scalars['Int'];
};

export type PrimitiveAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  primitive?: Maybe<Scalars['String']>;
  primitive_not?: Maybe<Scalars['String']>;
  primitive_gt?: Maybe<Scalars['String']>;
  primitive_lt?: Maybe<Scalars['String']>;
  primitive_gte?: Maybe<Scalars['String']>;
  primitive_lte?: Maybe<Scalars['String']>;
  primitive_in?: Maybe<Array<Scalars['String']>>;
  primitive_not_in?: Maybe<Array<Scalars['String']>>;
  primitive_contains?: Maybe<Scalars['String']>;
  primitive_not_contains?: Maybe<Scalars['String']>;
  primitive_starts_with?: Maybe<Scalars['String']>;
  primitive_not_starts_with?: Maybe<Scalars['String']>;
  primitive_ends_with?: Maybe<Scalars['String']>;
  primitive_not_ends_with?: Maybe<Scalars['String']>;
  priceFeed?: Maybe<Scalars['String']>;
  priceFeed_not?: Maybe<Scalars['String']>;
  priceFeed_gt?: Maybe<Scalars['String']>;
  priceFeed_lt?: Maybe<Scalars['String']>;
  priceFeed_gte?: Maybe<Scalars['String']>;
  priceFeed_lte?: Maybe<Scalars['String']>;
  priceFeed_in?: Maybe<Array<Scalars['String']>>;
  priceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  priceFeed_contains?: Maybe<Scalars['String']>;
  priceFeed_not_contains?: Maybe<Scalars['String']>;
  priceFeed_starts_with?: Maybe<Scalars['String']>;
  priceFeed_not_starts_with?: Maybe<Scalars['String']>;
  priceFeed_ends_with?: Maybe<Scalars['String']>;
  priceFeed_not_ends_with?: Maybe<Scalars['String']>;
  rateAsset?: Maybe<Scalars['Int']>;
  rateAsset_not?: Maybe<Scalars['Int']>;
  rateAsset_gt?: Maybe<Scalars['Int']>;
  rateAsset_lt?: Maybe<Scalars['Int']>;
  rateAsset_gte?: Maybe<Scalars['Int']>;
  rateAsset_lte?: Maybe<Scalars['Int']>;
  rateAsset_in?: Maybe<Array<Scalars['Int']>>;
  rateAsset_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PrimitiveAddedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Primitive = 'primitive',
  PriceFeed = 'priceFeed',
  RateAsset = 'rateAsset'
}

export type PrimitiveRemovedEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'PrimitiveRemovedEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  primitive: Asset;
};

export type PrimitiveRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  primitive?: Maybe<Scalars['String']>;
  primitive_not?: Maybe<Scalars['String']>;
  primitive_gt?: Maybe<Scalars['String']>;
  primitive_lt?: Maybe<Scalars['String']>;
  primitive_gte?: Maybe<Scalars['String']>;
  primitive_lte?: Maybe<Scalars['String']>;
  primitive_in?: Maybe<Array<Scalars['String']>>;
  primitive_not_in?: Maybe<Array<Scalars['String']>>;
  primitive_contains?: Maybe<Scalars['String']>;
  primitive_not_contains?: Maybe<Scalars['String']>;
  primitive_starts_with?: Maybe<Scalars['String']>;
  primitive_not_starts_with?: Maybe<Scalars['String']>;
  primitive_ends_with?: Maybe<Scalars['String']>;
  primitive_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PrimitiveRemovedEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Primitive = 'primitive'
}

export type Query = {
  __typename?: 'Query';
  newFundCreatedEvent?: Maybe<NewFundCreatedEvent>;
  newFundCreatedEvents: Array<NewFundCreatedEvent>;
  comptrollerProxyDeployedEvent?: Maybe<ComptrollerProxyDeployedEvent>;
  comptrollerProxyDeployedEvents: Array<ComptrollerProxyDeployedEvent>;
  vaultProxySetEvent?: Maybe<VaultProxySetEvent>;
  vaultProxySetEvents: Array<VaultProxySetEvent>;
  sharesBoughtEvent?: Maybe<SharesBoughtEvent>;
  sharesBoughtEvents: Array<SharesBoughtEvent>;
  sharesRedeemedEvent?: Maybe<SharesRedeemedEvent>;
  sharesRedeemedEvents: Array<SharesRedeemedEvent>;
  assetWithdrawnEvent?: Maybe<AssetWithdrawnEvent>;
  assetWithdrawnEvents: Array<AssetWithdrawnEvent>;
  trackedAssetAddedEvent?: Maybe<TrackedAssetAddedEvent>;
  trackedAssetAddedEvents: Array<TrackedAssetAddedEvent>;
  trackedAssetRemovedEvent?: Maybe<TrackedAssetRemovedEvent>;
  trackedAssetRemovedEvents: Array<TrackedAssetRemovedEvent>;
  authUserAddedForFundEvent?: Maybe<AuthUserAddedForFundEvent>;
  authUserAddedForFundEvents: Array<AuthUserAddedForFundEvent>;
  authUserRemovedForFundEvent?: Maybe<AuthUserRemovedForFundEvent>;
  authUserRemovedForFundEvents: Array<AuthUserRemovedForFundEvent>;
  callOnIntegrationExecutedForFundEvent?: Maybe<CallOnIntegrationExecutedForFundEvent>;
  callOnIntegrationExecutedForFundEvents: Array<CallOnIntegrationExecutedForFundEvent>;
  migrationSignaledEvent?: Maybe<MigrationSignaledEvent>;
  migrationSignaledEvents: Array<MigrationSignaledEvent>;
  migrationCancelledEvent?: Maybe<MigrationCancelledEvent>;
  migrationCancelledEvents: Array<MigrationCancelledEvent>;
  migrationExecutedEvent?: Maybe<MigrationExecutedEvent>;
  migrationExecutedEvents: Array<MigrationExecutedEvent>;
  migrationInCancelHookFailedEvent?: Maybe<MigrationInCancelHookFailedEvent>;
  migrationInCancelHookFailedEvents: Array<MigrationInCancelHookFailedEvent>;
  migrationOutHookFailedEvent?: Maybe<MigrationOutHookFailedEvent>;
  migrationOutHookFailedEvents: Array<MigrationOutHookFailedEvent>;
  feeEnabledForFundEvent?: Maybe<FeeEnabledForFundEvent>;
  feeEnabledForFundEvents: Array<FeeEnabledForFundEvent>;
  feesRecipientSetForFundEvent?: Maybe<FeesRecipientSetForFundEvent>;
  feesRecipientSetForFundEvents: Array<FeesRecipientSetForFundEvent>;
  feeSettledForFundEvent?: Maybe<FeeSettledForFundEvent>;
  feeSettledForFundEvents: Array<FeeSettledForFundEvent>;
  allSharesOutstandingForcePaidForFundEvent?: Maybe<AllSharesOutstandingForcePaidForFundEvent>;
  allSharesOutstandingForcePaidForFundEvents: Array<AllSharesOutstandingForcePaidForFundEvent>;
  sharesOutstandingPaidForFundEvent?: Maybe<SharesOutstandingPaidForFundEvent>;
  sharesOutstandingPaidForFundEvents: Array<SharesOutstandingPaidForFundEvent>;
  policyEnabledForFundEvent?: Maybe<PolicyEnabledForFundEvent>;
  policyEnabledForFundEvents: Array<PolicyEnabledForFundEvent>;
  policyDisabledForFundEvent?: Maybe<PolicyDisabledForFundEvent>;
  policyDisabledForFundEvents: Array<PolicyDisabledForFundEvent>;
  accessorSetEvent?: Maybe<AccessorSetEvent>;
  accessorSetEvents: Array<AccessorSetEvent>;
  ownerSetEvent?: Maybe<OwnerSetEvent>;
  ownerSetEvents: Array<OwnerSetEvent>;
  migratorSetEvent?: Maybe<MigratorSetEvent>;
  migratorSetEvents: Array<MigratorSetEvent>;
  vaultLibSetEvent?: Maybe<VaultLibSetEvent>;
  vaultLibSetEvents: Array<VaultLibSetEvent>;
  approvalEvent?: Maybe<ApprovalEvent>;
  approvalEvents: Array<ApprovalEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  adapterBlacklistAddressesAddedEvent?: Maybe<AdapterBlacklistAddressesAddedEvent>;
  adapterBlacklistAddressesAddedEvents: Array<AdapterBlacklistAddressesAddedEvent>;
  adapterBlacklistAddressesRemovedEvent?: Maybe<AdapterBlacklistAddressesRemovedEvent>;
  adapterBlacklistAddressesRemovedEvents: Array<AdapterBlacklistAddressesRemovedEvent>;
  adapterWhitelistAddressesAddedEvent?: Maybe<AdapterWhitelistAddressesAddedEvent>;
  adapterWhitelistAddressesAddedEvents: Array<AdapterWhitelistAddressesAddedEvent>;
  adapterWhitelistAddressesRemovedEvent?: Maybe<AdapterWhitelistAddressesRemovedEvent>;
  adapterWhitelistAddressesRemovedEvents: Array<AdapterWhitelistAddressesRemovedEvent>;
  assetBlacklistAddressesAddedEvent?: Maybe<AssetBlacklistAddressesAddedEvent>;
  assetBlacklistAddressesAddedEvents: Array<AssetBlacklistAddressesAddedEvent>;
  assetBlacklistAddressesRemovedEvent?: Maybe<AssetBlacklistAddressesRemovedEvent>;
  assetBlacklistAddressesRemovedEvents: Array<AssetBlacklistAddressesRemovedEvent>;
  assetWhitelistAddressesAddedEvent?: Maybe<AssetWhitelistAddressesAddedEvent>;
  assetWhitelistAddressesAddedEvents: Array<AssetWhitelistAddressesAddedEvent>;
  assetWhitelistAddressesRemovedEvent?: Maybe<AssetWhitelistAddressesRemovedEvent>;
  assetWhitelistAddressesRemovedEvents: Array<AssetWhitelistAddressesRemovedEvent>;
  buySharesCallerWhitelistAddressesAddedEvent?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent>;
  buySharesCallerWhitelistAddressesAddedEvents: Array<BuySharesCallerWhitelistAddressesAddedEvent>;
  buySharesCallerWhitelistAddressesRemovedEvent?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent>;
  buySharesCallerWhitelistAddressesRemovedEvents: Array<BuySharesCallerWhitelistAddressesRemovedEvent>;
  guaranteedRedemptionFundSettingsSetEvent?: Maybe<GuaranteedRedemptionFundSettingsSetEvent>;
  guaranteedRedemptionFundSettingsSetEvents: Array<GuaranteedRedemptionFundSettingsSetEvent>;
  investorWhitelistAddressesAddedEvent?: Maybe<InvestorWhitelistAddressesAddedEvent>;
  investorWhitelistAddressesAddedEvents: Array<InvestorWhitelistAddressesAddedEvent>;
  investorWhitelistAddressesRemovedEvent?: Maybe<InvestorWhitelistAddressesRemovedEvent>;
  investorWhitelistAddressesRemovedEvents: Array<InvestorWhitelistAddressesRemovedEvent>;
  maxConcentrationSetEvent?: Maybe<MaxConcentrationSetEvent>;
  maxConcentrationSetEvents: Array<MaxConcentrationSetEvent>;
  minMaxInvestmentFundSettingsSetEvent?: Maybe<MinMaxInvestmentFundSettingsSetEvent>;
  minMaxInvestmentFundSettingsSetEvents: Array<MinMaxInvestmentFundSettingsSetEvent>;
  managementFeeSettingsAddedEvent?: Maybe<ManagementFeeSettingsAddedEvent>;
  managementFeeSettingsAddedEvents: Array<ManagementFeeSettingsAddedEvent>;
  managementFeeSettledEvent?: Maybe<ManagementFeeSettledEvent>;
  managementFeeSettledEvents: Array<ManagementFeeSettledEvent>;
  performanceFeeSettingsAddedEvent?: Maybe<PerformanceFeeSettingsAddedEvent>;
  performanceFeeSettingsAddedEvents: Array<PerformanceFeeSettingsAddedEvent>;
  performanceFeeActivatedForFundEvent?: Maybe<PerformanceFeeActivatedForFundEvent>;
  performanceFeeActivatedForFundEvents: Array<PerformanceFeeActivatedForFundEvent>;
  performanceFeeSharePriceUpdatedEvent?: Maybe<PerformanceFeeSharePriceUpdatedEvent>;
  performanceFeeSharePriceUpdatedEvents: Array<PerformanceFeeSharePriceUpdatedEvent>;
  performanceFeePaidOutEvent?: Maybe<PerformanceFeePaidOutEvent>;
  performanceFeePaidOutEvents: Array<PerformanceFeePaidOutEvent>;
  performanceFeePerformanceUpdatedEvent?: Maybe<PerformanceFeePerformanceUpdatedEvent>;
  performanceFeePerformanceUpdatedEvents: Array<PerformanceFeePerformanceUpdatedEvent>;
  entranceRateDirectFeeSettingsAddedEvent?: Maybe<EntranceRateDirectFeeSettingsAddedEvent>;
  entranceRateDirectFeeSettingsAddedEvents: Array<EntranceRateDirectFeeSettingsAddedEvent>;
  entranceRateDirectFeeSettledEvent?: Maybe<EntranceRateDirectFeeSettledEvent>;
  entranceRateDirectFeeSettledEvents: Array<EntranceRateDirectFeeSettledEvent>;
  entranceRateBurnFeeSettingsAddedEvent?: Maybe<EntranceRateBurnFeeSettingsAddedEvent>;
  entranceRateBurnFeeSettingsAddedEvents: Array<EntranceRateBurnFeeSettingsAddedEvent>;
  entranceRateBurnFeeSettledEvent?: Maybe<EntranceRateBurnFeeSettledEvent>;
  entranceRateBurnFeeSettledEvents: Array<EntranceRateBurnFeeSettledEvent>;
  overridePauseSetEvent?: Maybe<OverridePauseSetEvent>;
  overridePauseSetEvents: Array<OverridePauseSetEvent>;
  migratedSharesDuePaidEvent?: Maybe<MigratedSharesDuePaidEvent>;
  migratedSharesDuePaidEvents: Array<MigratedSharesDuePaidEvent>;
  preRedeemSharesHookFailedEvent?: Maybe<PreRedeemSharesHookFailedEvent>;
  preRedeemSharesHookFailedEvents: Array<PreRedeemSharesHookFailedEvent>;
  vaultProxyDeployedEvent?: Maybe<VaultProxyDeployedEvent>;
  vaultProxyDeployedEvents: Array<VaultProxyDeployedEvent>;
  comptrollerLibSetEvent?: Maybe<ComptrollerLibSetEvent>;
  comptrollerLibSetEvents: Array<ComptrollerLibSetEvent>;
  adapterRegisteredEvent?: Maybe<AdapterRegisteredEvent>;
  adapterRegisteredEvents: Array<AdapterRegisteredEvent>;
  adapterDeregisteredEvent?: Maybe<AdapterDeregisteredEvent>;
  adapterDeregisteredEvents: Array<AdapterDeregisteredEvent>;
  trackedAssetsLimitSetEvent?: Maybe<TrackedAssetsLimitSetEvent>;
  trackedAssetsLimitSetEvents: Array<TrackedAssetsLimitSetEvent>;
  policyRegisteredEvent?: Maybe<PolicyRegisteredEvent>;
  policyRegisteredEvents: Array<PolicyRegisteredEvent>;
  policyDeregisteredEvent?: Maybe<PolicyDeregisteredEvent>;
  policyDeregisteredEvents: Array<PolicyDeregisteredEvent>;
  guaranteedRedemptionAdapterAddedEvent?: Maybe<GuaranteedRedemptionAdapterAddedEvent>;
  guaranteedRedemptionAdapterAddedEvents: Array<GuaranteedRedemptionAdapterAddedEvent>;
  guaranteedRedemptionAdapterRemovedEvent?: Maybe<GuaranteedRedemptionAdapterRemovedEvent>;
  guaranteedRedemptionAdapterRemovedEvents: Array<GuaranteedRedemptionAdapterRemovedEvent>;
  guaranteedRedemptionRedemptionWindowBufferSetEvent?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent>;
  guaranteedRedemptionRedemptionWindowBufferSetEvents: Array<GuaranteedRedemptionRedemptionWindowBufferSetEvent>;
  fundDeployerSetEvent?: Maybe<FundDeployerSetEvent>;
  fundDeployerSetEvents: Array<FundDeployerSetEvent>;
  valueInterpreterSetEvent?: Maybe<ValueInterpreterSetEvent>;
  valueInterpreterSetEvents: Array<ValueInterpreterSetEvent>;
  ownershipTransferredEvent?: Maybe<OwnershipTransferredEvent>;
  ownershipTransferredEvents: Array<OwnershipTransferredEvent>;
  derivativeAddedEvent?: Maybe<DerivativeAddedEvent>;
  derivativeAddedEvents: Array<DerivativeAddedEvent>;
  derivativeRemovedEvent?: Maybe<DerivativeRemovedEvent>;
  derivativeRemovedEvents: Array<DerivativeRemovedEvent>;
  derivativeUpdatedEvent?: Maybe<DerivativeUpdatedEvent>;
  derivativeUpdatedEvents: Array<DerivativeUpdatedEvent>;
  aggregatorUpdatedEvent?: Maybe<AggregatorUpdatedEvent>;
  aggregatorUpdatedEvents: Array<AggregatorUpdatedEvent>;
  ethUsdAggregatorSetEvent?: Maybe<EthUsdAggregatorSetEvent>;
  ethUsdAggregatorSetEvents: Array<EthUsdAggregatorSetEvent>;
  primitiveAddedEvent?: Maybe<PrimitiveAddedEvent>;
  primitiveAddedEvents: Array<PrimitiveAddedEvent>;
  primitiveRemovedEvent?: Maybe<PrimitiveRemovedEvent>;
  primitiveRemovedEvents: Array<PrimitiveRemovedEvent>;
  feeRegisteredEvent?: Maybe<FeeRegisteredEvent>;
  feeRegisteredEvents: Array<FeeRegisteredEvent>;
  feeDeregisteredEvent?: Maybe<FeeDeregisteredEvent>;
  feeDeregisteredEvents: Array<FeeDeregisteredEvent>;
  migrationTimelockSetEvent?: Maybe<MigrationTimelockSetEvent>;
  migrationTimelockSetEvents: Array<MigrationTimelockSetEvent>;
  nominatedOwnerRemovedEvent?: Maybe<NominatedOwnerRemovedEvent>;
  nominatedOwnerRemovedEvents: Array<NominatedOwnerRemovedEvent>;
  nominatedOwnerSetEvent?: Maybe<NominatedOwnerSetEvent>;
  nominatedOwnerSetEvents: Array<NominatedOwnerSetEvent>;
  dispatcherOwnershipTransferredEvent?: Maybe<DispatcherOwnershipTransferredEvent>;
  dispatcherOwnershipTransferredEvents: Array<DispatcherOwnershipTransferredEvent>;
  sharesTokenSymbolSetEvent?: Maybe<SharesTokenSymbolSetEvent>;
  sharesTokenSymbolSetEvents: Array<SharesTokenSymbolSetEvent>;
  releaseStatusSetEvent?: Maybe<ReleaseStatusSetEvent>;
  releaseStatusSetEvents: Array<ReleaseStatusSetEvent>;
  vaultCallRegisteredEvent?: Maybe<VaultCallRegisteredEvent>;
  vaultCallRegisteredEvents: Array<VaultCallRegisteredEvent>;
  vaultCallDeregisteredEvent?: Maybe<VaultCallDeregisteredEvent>;
  vaultCallDeregisteredEvents: Array<VaultCallDeregisteredEvent>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  integrationManager?: Maybe<IntegrationManager>;
  integrationManagers: Array<IntegrationManager>;
  policyManager?: Maybe<PolicyManager>;
  policyManagers: Array<PolicyManager>;
  feeManager?: Maybe<FeeManager>;
  feeManagers: Array<FeeManager>;
  guaranteedRedemption?: Maybe<GuaranteedRedemption>;
  guaranteedRedemptions: Array<GuaranteedRedemption>;
  fund?: Maybe<Fund>;
  funds: Array<Fund>;
  hourlyFundState?: Maybe<HourlyFundState>;
  hourlyFundStates: Array<HourlyFundState>;
  dailyFundState?: Maybe<DailyFundState>;
  dailyFundStates: Array<DailyFundState>;
  monthlyFundState?: Maybe<MonthlyFundState>;
  monthlyFundStates: Array<MonthlyFundState>;
  migration?: Maybe<Migration>;
  migrations: Array<Migration>;
  release?: Maybe<Release>;
  releases: Array<Release>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  investment?: Maybe<Investment>;
  investments: Array<Investment>;
  investmentState?: Maybe<InvestmentState>;
  investmentStates: Array<InvestmentState>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  managementFeeSetting?: Maybe<ManagementFeeSetting>;
  managementFeeSettings: Array<ManagementFeeSetting>;
  performanceFeeSetting?: Maybe<PerformanceFeeSetting>;
  performanceFeeSettings: Array<PerformanceFeeSetting>;
  entranceRateDirectFeeSetting?: Maybe<EntranceRateDirectFeeSetting>;
  entranceRateDirectFeeSettings: Array<EntranceRateDirectFeeSetting>;
  entranceRateBurnFeeSetting?: Maybe<EntranceRateBurnFeeSetting>;
  entranceRateBurnFeeSettings: Array<EntranceRateBurnFeeSetting>;
  integrationAdapter?: Maybe<IntegrationAdapter>;
  integrationAdapters: Array<IntegrationAdapter>;
  policy?: Maybe<Policy>;
  policies: Array<Policy>;
  adapterBlacklistSetting?: Maybe<AdapterBlacklistSetting>;
  adapterBlacklistSettings: Array<AdapterBlacklistSetting>;
  adapterWhitelistSetting?: Maybe<AdapterWhitelistSetting>;
  adapterWhitelistSettings: Array<AdapterWhitelistSetting>;
  assetBlacklistSetting?: Maybe<AssetBlacklistSetting>;
  assetBlacklistSettings: Array<AssetBlacklistSetting>;
  assetWhitelistSetting?: Maybe<AssetWhitelistSetting>;
  assetWhitelistSettings: Array<AssetWhitelistSetting>;
  buySharesCallerWhitelistSetting?: Maybe<BuySharesCallerWhitelistSetting>;
  buySharesCallerWhitelistSettings: Array<BuySharesCallerWhitelistSetting>;
  guaranteedRedemptionSetting?: Maybe<GuaranteedRedemptionSetting>;
  guaranteedRedemptionSettings: Array<GuaranteedRedemptionSetting>;
  investorWhitelistSetting?: Maybe<InvestorWhitelistSetting>;
  investorWhitelistSettings: Array<InvestorWhitelistSetting>;
  maxConcentrationSetting?: Maybe<MaxConcentrationSetting>;
  maxConcentrationSettings: Array<MaxConcentrationSetting>;
  minMaxInvestmentSetting?: Maybe<MinMaxInvestmentSetting>;
  minMaxInvestmentSettings: Array<MinMaxInvestmentSetting>;
  unknownPolicySetting?: Maybe<UnknownPolicySetting>;
  unknownPolicySettings: Array<UnknownPolicySetting>;
  shareState?: Maybe<ShareState>;
  shareStates: Array<ShareState>;
  portfolioState?: Maybe<PortfolioState>;
  portfolioStates: Array<PortfolioState>;
  holdingState?: Maybe<HoldingState>;
  holdingStates: Array<HoldingState>;
  calculationState?: Maybe<CalculationState>;
  calculationStates: Array<CalculationState>;
  fundState?: Maybe<FundState>;
  fundStates: Array<FundState>;
  feeState?: Maybe<FeeState>;
  feeStates: Array<FeeState>;
  managementFeeState?: Maybe<ManagementFeeState>;
  managementFeeStates: Array<ManagementFeeState>;
  performanceFeeState?: Maybe<PerformanceFeeState>;
  performanceFeeStates: Array<PerformanceFeeState>;
  entranceRateDirectFeeState?: Maybe<EntranceRateDirectFeeState>;
  entranceRateDirectFeeStates: Array<EntranceRateDirectFeeState>;
  entranceRateBurnFeeState?: Maybe<EntranceRateBurnFeeState>;
  entranceRateBurnFeeStates: Array<EntranceRateBurnFeeState>;
  tokenSwapTrade?: Maybe<TokenSwapTrade>;
  tokenSwapTrades: Array<TokenSwapTrade>;
  multiTokenSwapTrade?: Maybe<MultiTokenSwapTrade>;
  multiTokenSwapTrades: Array<MultiTokenSwapTrade>;
  lendTrade?: Maybe<LendTrade>;
  lendTrades: Array<LendTrade>;
  multiLendTrade?: Maybe<MultiLendTrade>;
  multiLendTrades: Array<MultiLendTrade>;
  redeemTrade?: Maybe<RedeemTrade>;
  redeemTrades: Array<RedeemTrade>;
  multiRedeemTrade?: Maybe<MultiRedeemTrade>;
  multiRedeemTrades: Array<MultiRedeemTrade>;
  addTrackedAssetsTrade?: Maybe<AddTrackedAssetsTrade>;
  addTrackedAssetsTrades: Array<AddTrackedAssetsTrade>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  uniswapV2PoolAssetDetail?: Maybe<UniswapV2PoolAssetDetail>;
  uniswapV2PoolAssetDetails: Array<UniswapV2PoolAssetDetail>;
  compoundAssetDetails: Array<CompoundAssetDetails>;
  assetAmount?: Maybe<AssetAmount>;
  assetAmounts: Array<AssetAmount>;
  assetPrice?: Maybe<AssetPrice>;
  assetPrices: Array<AssetPrice>;
  currencyPrice?: Maybe<CurrencyPrice>;
  currencyPrices: Array<CurrencyPrice>;
  hourlyAssetPriceCandle?: Maybe<HourlyAssetPriceCandle>;
  hourlyAssetPriceCandles: Array<HourlyAssetPriceCandle>;
  dailyAssetPriceCandle?: Maybe<DailyAssetPriceCandle>;
  dailyAssetPriceCandles: Array<DailyAssetPriceCandle>;
  monthlyAssetPriceCandle?: Maybe<MonthlyAssetPriceCandle>;
  monthlyAssetPriceCandles: Array<MonthlyAssetPriceCandle>;
  hourlyCurrencyPriceCandle?: Maybe<HourlyCurrencyPriceCandle>;
  hourlyCurrencyPriceCandles: Array<HourlyCurrencyPriceCandle>;
  dailyCurrencyPriceCandle?: Maybe<DailyCurrencyPriceCandle>;
  dailyCurrencyPriceCandles: Array<DailyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandle?: Maybe<MonthlyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandles: Array<MonthlyCurrencyPriceCandle>;
  hourlyPriceCandleGroup?: Maybe<HourlyPriceCandleGroup>;
  hourlyPriceCandleGroups: Array<HourlyPriceCandleGroup>;
  dailyPriceCandleGroup?: Maybe<DailyPriceCandleGroup>;
  dailyPriceCandleGroups: Array<DailyPriceCandleGroup>;
  monthlyPriceCandleGroup?: Maybe<MonthlyPriceCandleGroup>;
  monthlyPriceCandleGroups: Array<MonthlyPriceCandleGroup>;
  chainlinkAggregatorProxy?: Maybe<ChainlinkAggregatorProxy>;
  chainlinkAggregatorProxies: Array<ChainlinkAggregatorProxy>;
  cron?: Maybe<Cron>;
  crons: Array<Cron>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  networkState?: Maybe<NetworkState>;
  networkStates: Array<NetworkState>;
  networkAssetHolding?: Maybe<NetworkAssetHolding>;
  networkAssetHoldings: Array<NetworkAssetHolding>;
  eventInterface?: Maybe<EventInterface>;
  eventInterfaces: Array<EventInterface>;
  networkEventInterface?: Maybe<NetworkEventInterface>;
  networkEventInterfaces: Array<NetworkEventInterface>;
  fundEventInterface?: Maybe<FundEventInterface>;
  fundEventInterfaces: Array<FundEventInterface>;
  sharesChangeInterface?: Maybe<SharesChangeInterface>;
  sharesChangeInterfaces: Array<SharesChangeInterface>;
  feeSharesChangeInterface?: Maybe<FeeSharesChangeInterface>;
  feeSharesChangeInterfaces: Array<FeeSharesChangeInterface>;
  investmentSharesChangeInterface?: Maybe<InvestmentSharesChangeInterface>;
  investmentSharesChangeInterfaces: Array<InvestmentSharesChangeInterface>;
  fundStateInterface?: Maybe<FundStateInterface>;
  fundStateInterfaces: Array<FundStateInterface>;
  feeSettingInterface?: Maybe<FeeSettingInterface>;
  feeSettingInterfaces: Array<FeeSettingInterface>;
  policySettingInterface?: Maybe<PolicySettingInterface>;
  policySettingInterfaces: Array<PolicySettingInterface>;
  individualFeeStateInterface?: Maybe<IndividualFeeStateInterface>;
  individualFeeStateInterfaces: Array<IndividualFeeStateInterface>;
  periodicFundStateInterface?: Maybe<PeriodicFundStateInterface>;
  periodicFundStateInterfaces: Array<PeriodicFundStateInterface>;
  trade?: Maybe<Trade>;
  trades: Array<Trade>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryNewFundCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNewFundCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewFundCreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewFundCreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryComptrollerProxyDeployedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryComptrollerProxyDeployedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ComptrollerProxyDeployedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ComptrollerProxyDeployedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVaultProxySetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVaultProxySetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultProxySetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultProxySetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySharesBoughtEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySharesBoughtEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesBoughtEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesBoughtEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySharesRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySharesRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesRedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesRedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAuthUserAddedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAuthUserAddedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthUserAddedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthUserAddedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAuthUserRemovedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAuthUserRemovedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthUserRemovedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthUserRemovedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCallOnIntegrationExecutedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCallOnIntegrationExecutedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CallOnIntegrationExecutedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CallOnIntegrationExecutedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationSignaledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationSignaledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationSignaledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationSignaledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationCancelledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationCancelledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationCancelledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationCancelledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationExecutedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationExecutedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationExecutedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationExecutedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationInCancelHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationInCancelHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationInCancelHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationInCancelHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationOutHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationOutHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationOutHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationOutHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeEnabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeEnabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeEnabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeEnabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeesRecipientSetForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeesRecipientSetForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeesRecipientSetForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeesRecipientSetForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeSettledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeSettledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAllSharesOutstandingForcePaidForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAllSharesOutstandingForcePaidForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AllSharesOutstandingForcePaidForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AllSharesOutstandingForcePaidForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySharesOutstandingPaidForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySharesOutstandingPaidForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesOutstandingPaidForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesOutstandingPaidForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyEnabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicyEnabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyEnabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyEnabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyDisabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicyDisabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyDisabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyDisabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAccessorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAccessorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AccessorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AccessorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOwnerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOwnerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigratorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigratorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigratorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigratorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVaultLibSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVaultLibSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultLibSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultLibSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryApprovalEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryApprovalEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransferEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransferEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionFundSettingsSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionFundSettingsSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionFundSettingsSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionFundSettingsSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMaxConcentrationSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMaxConcentrationSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MaxConcentrationSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MaxConcentrationSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMinMaxInvestmentFundSettingsSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMinMaxInvestmentFundSettingsSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MinMaxInvestmentFundSettingsSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MinMaxInvestmentFundSettingsSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeActivatedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeActivatedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeActivatedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeActivatedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSharePriceUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSharePriceUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSharePriceUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSharePriceUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeePaidOutEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeePaidOutEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeePaidOutEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeePaidOutEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeePerformanceUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeePerformanceUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeePerformanceUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeePerformanceUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOverridePauseSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOverridePauseSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OverridePauseSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OverridePauseSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigratedSharesDuePaidEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigratedSharesDuePaidEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigratedSharesDuePaidEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigratedSharesDuePaidEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPreRedeemSharesHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPreRedeemSharesHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreRedeemSharesHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PreRedeemSharesHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVaultProxyDeployedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVaultProxyDeployedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultProxyDeployedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultProxyDeployedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryComptrollerLibSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryComptrollerLibSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ComptrollerLibSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ComptrollerLibSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetsLimitSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTrackedAssetsLimitSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetsLimitSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetsLimitSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicyRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicyDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionAdapterAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionAdapterAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionAdapterAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionAdapterAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionAdapterRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionAdapterRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionAdapterRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionAdapterRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionRedemptionWindowBufferSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionRedemptionWindowBufferSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundDeployerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundDeployerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundDeployerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundDeployerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryValueInterpreterSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryValueInterpreterSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValueInterpreterSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ValueInterpreterSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDerivativeUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAggregatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAggregatorUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AggregatorUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AggregatorUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEthUsdAggregatorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEthUsdAggregatorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EthUsdAggregatorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EthUsdAggregatorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrimitiveAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrimitiveAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrimitiveAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrimitiveAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrimitiveRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrimitiveRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrimitiveRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrimitiveRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationTimelockSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationTimelockSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationTimelockSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationTimelockSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNominatedOwnerRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNominatedOwnerRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominatedOwnerRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NominatedOwnerRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNominatedOwnerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNominatedOwnerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominatedOwnerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NominatedOwnerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDispatcherOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDispatcherOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DispatcherOwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DispatcherOwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySharesTokenSymbolSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySharesTokenSymbolSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesTokenSymbolSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesTokenSymbolSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryReleaseStatusSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryReleaseStatusSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReleaseStatusSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReleaseStatusSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVaultCallRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVaultCallRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultCallRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultCallRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVaultCallDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVaultCallDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultCallDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultCallDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIntegrationManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIntegrationManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicyManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHourlyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHourlyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDailyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDailyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMigrationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMigrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Migration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Migration_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryReleaseArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryReleasesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Release_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Release_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fee_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fee_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIntegrationAdapterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIntegrationAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoliciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Policy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Policy_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterBlacklistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAdapterWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetBlacklistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBuySharesCallerWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGuaranteedRedemptionSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestorWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMaxConcentrationSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMaxConcentrationSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MaxConcentrationSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MaxConcentrationSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMinMaxInvestmentSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMinMaxInvestmentSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MinMaxInvestmentSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MinMaxInvestmentSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUnknownPolicySettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUnknownPolicySettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnknownPolicySetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnknownPolicySetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryShareStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryShareStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ShareState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ShareState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPortfolioStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPortfolioStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PortfolioState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PortfolioState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHoldingStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHoldingStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HoldingState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HoldingState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCalculationStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCalculationStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CalculationState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CalculationState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryManagementFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPerformanceFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateDirectFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEntranceRateBurnFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenSwapTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenSwapTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenSwapTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenSwapTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultiTokenSwapTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultiTokenSwapTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiTokenSwapTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiTokenSwapTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLendTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLendTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultiLendTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultiLendTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiLendTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiLendTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedeemTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedeemTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultiRedeemTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultiRedeemTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiRedeemTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiRedeemTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAddTrackedAssetsTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAddTrackedAssetsTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AddTrackedAssetsTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AddTrackedAssetsTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCurrenciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Currency_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Currency_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUniswapV2PoolAssetDetailArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUniswapV2PoolAssetDetailsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapV2PoolAssetDetail_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapV2PoolAssetDetail_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCompoundAssetDetailsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CompoundAssetDetails_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CompoundAssetDetails_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetAmountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAssetPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCurrencyPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCurrencyPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CurrencyPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CurrencyPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHourlyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHourlyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDailyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDailyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHourlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHourlyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDailyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDailyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHourlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHourlyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDailyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDailyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMonthlyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryChainlinkAggregatorProxyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryChainlinkAggregatorProxiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChainlinkAggregatorProxy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ChainlinkAggregatorProxy_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCronArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCronsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Cron_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Cron_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNetworkArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNetworksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Network_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Network_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNetworkStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNetworkStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkState_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNetworkAssetHoldingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNetworkAssetHoldingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkAssetHolding_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkAssetHolding_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryNetworkEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryNetworkEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkEventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeSharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeSharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentSharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentSharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentSharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFeeSettingInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFeeSettingInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettingInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPolicySettingInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPolicySettingInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicySettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicySettingInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIndividualFeeStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIndividualFeeStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IndividualFeeStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IndividualFeeStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPeriodicFundStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPeriodicFundStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PeriodicFundStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PeriodicFundStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Trade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Trade_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type RedeemTrade = Trade & {
  __typename?: 'RedeemTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmount: AssetAmount;
  outgoingAssetAmount: AssetAmount;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};

export type RedeemTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmount?: Maybe<Scalars['String']>;
  incomingAssetAmount_not?: Maybe<Scalars['String']>;
  incomingAssetAmount_gt?: Maybe<Scalars['String']>;
  incomingAssetAmount_lt?: Maybe<Scalars['String']>;
  incomingAssetAmount_gte?: Maybe<Scalars['String']>;
  incomingAssetAmount_lte?: Maybe<Scalars['String']>;
  incomingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum RedeemTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmount = 'incomingAssetAmount',
  OutgoingAssetAmount = 'outgoingAssetAmount',
  Price = 'price',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type Release = {
  __typename?: 'Release';
  id: Scalars['ID'];
  current: Scalars['Boolean'];
  open: Scalars['BigInt'];
  close?: Maybe<Scalars['BigInt']>;
  funds?: Maybe<Array<Fund>>;
  network: Network;
  adapterBlacklist: Scalars['String'];
  adapterWhitelist: Scalars['String'];
  aggregatedDerivativePriceFeed: Scalars['String'];
  assetBlacklist: Scalars['String'];
  assetWhitelist: Scalars['String'];
  buySharesCallerWhitelist: Scalars['String'];
  chaiAdapter: Scalars['String'];
  chaiIntegratee: Scalars['String'];
  chainlinkPriceFeed: Scalars['String'];
  compoundAdapter: Scalars['String'];
  comptrollerLib: Scalars['String'];
  dispatcher: Scalars['String'];
  entranceRateBurnFee: Scalars['String'];
  entranceRateDirectFee: Scalars['String'];
  feeManager: Scalars['String'];
  fundActionsWrapper: Scalars['String'];
  fundDeployer: Scalars['String'];
  guaranteedRedemption: Scalars['String'];
  integrationManager: Scalars['String'];
  investorWhitelist: Scalars['String'];
  kyberAdapter: Scalars['String'];
  kyberIntegratee: Scalars['String'];
  managementFee: Scalars['String'];
  maxConcentration: Scalars['String'];
  minMaxInvestment: Scalars['String'];
  paraSwapAdapter: Scalars['String'];
  performanceFee: Scalars['String'];
  policyManager: Scalars['String'];
  synthetixAdapter: Scalars['String'];
  synthetixAddressResolver: Scalars['String'];
  synthetixDelegateApprovals: Scalars['String'];
  synthetixIntegratee: Scalars['String'];
  trackedAssetsAdapter: Scalars['String'];
  uniswapV2Adapter: Scalars['String'];
  uniswapV2Integratee: Scalars['String'];
  valueInterpreter: Scalars['String'];
  vaultLib: Scalars['String'];
  wethToken: Scalars['String'];
  zeroExV2Adapter: Scalars['String'];
};


export type ReleaseFundsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
};

export type ReleaseStatusSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'ReleaseStatusSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevStatus: Scalars['Int'];
  nextStatus: Scalars['Int'];
};

export type ReleaseStatusSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevStatus?: Maybe<Scalars['Int']>;
  prevStatus_not?: Maybe<Scalars['Int']>;
  prevStatus_gt?: Maybe<Scalars['Int']>;
  prevStatus_lt?: Maybe<Scalars['Int']>;
  prevStatus_gte?: Maybe<Scalars['Int']>;
  prevStatus_lte?: Maybe<Scalars['Int']>;
  prevStatus_in?: Maybe<Array<Scalars['Int']>>;
  prevStatus_not_in?: Maybe<Array<Scalars['Int']>>;
  nextStatus?: Maybe<Scalars['Int']>;
  nextStatus_not?: Maybe<Scalars['Int']>;
  nextStatus_gt?: Maybe<Scalars['Int']>;
  nextStatus_lt?: Maybe<Scalars['Int']>;
  nextStatus_gte?: Maybe<Scalars['Int']>;
  nextStatus_lte?: Maybe<Scalars['Int']>;
  nextStatus_in?: Maybe<Array<Scalars['Int']>>;
  nextStatus_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum ReleaseStatusSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevStatus = 'prevStatus',
  NextStatus = 'nextStatus'
}

export type Release_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  current?: Maybe<Scalars['Boolean']>;
  current_not?: Maybe<Scalars['Boolean']>;
  current_in?: Maybe<Array<Scalars['Boolean']>>;
  current_not_in?: Maybe<Array<Scalars['Boolean']>>;
  open?: Maybe<Scalars['BigInt']>;
  open_not?: Maybe<Scalars['BigInt']>;
  open_gt?: Maybe<Scalars['BigInt']>;
  open_lt?: Maybe<Scalars['BigInt']>;
  open_gte?: Maybe<Scalars['BigInt']>;
  open_lte?: Maybe<Scalars['BigInt']>;
  open_in?: Maybe<Array<Scalars['BigInt']>>;
  open_not_in?: Maybe<Array<Scalars['BigInt']>>;
  close?: Maybe<Scalars['BigInt']>;
  close_not?: Maybe<Scalars['BigInt']>;
  close_gt?: Maybe<Scalars['BigInt']>;
  close_lt?: Maybe<Scalars['BigInt']>;
  close_gte?: Maybe<Scalars['BigInt']>;
  close_lte?: Maybe<Scalars['BigInt']>;
  close_in?: Maybe<Array<Scalars['BigInt']>>;
  close_not_in?: Maybe<Array<Scalars['BigInt']>>;
  network?: Maybe<Scalars['String']>;
  network_not?: Maybe<Scalars['String']>;
  network_gt?: Maybe<Scalars['String']>;
  network_lt?: Maybe<Scalars['String']>;
  network_gte?: Maybe<Scalars['String']>;
  network_lte?: Maybe<Scalars['String']>;
  network_in?: Maybe<Array<Scalars['String']>>;
  network_not_in?: Maybe<Array<Scalars['String']>>;
  network_contains?: Maybe<Scalars['String']>;
  network_not_contains?: Maybe<Scalars['String']>;
  network_starts_with?: Maybe<Scalars['String']>;
  network_not_starts_with?: Maybe<Scalars['String']>;
  network_ends_with?: Maybe<Scalars['String']>;
  network_not_ends_with?: Maybe<Scalars['String']>;
  adapterBlacklist?: Maybe<Scalars['String']>;
  adapterBlacklist_not?: Maybe<Scalars['String']>;
  adapterBlacklist_gt?: Maybe<Scalars['String']>;
  adapterBlacklist_lt?: Maybe<Scalars['String']>;
  adapterBlacklist_gte?: Maybe<Scalars['String']>;
  adapterBlacklist_lte?: Maybe<Scalars['String']>;
  adapterBlacklist_in?: Maybe<Array<Scalars['String']>>;
  adapterBlacklist_not_in?: Maybe<Array<Scalars['String']>>;
  adapterBlacklist_contains?: Maybe<Scalars['String']>;
  adapterBlacklist_not_contains?: Maybe<Scalars['String']>;
  adapterBlacklist_starts_with?: Maybe<Scalars['String']>;
  adapterBlacklist_not_starts_with?: Maybe<Scalars['String']>;
  adapterBlacklist_ends_with?: Maybe<Scalars['String']>;
  adapterBlacklist_not_ends_with?: Maybe<Scalars['String']>;
  adapterWhitelist?: Maybe<Scalars['String']>;
  adapterWhitelist_not?: Maybe<Scalars['String']>;
  adapterWhitelist_gt?: Maybe<Scalars['String']>;
  adapterWhitelist_lt?: Maybe<Scalars['String']>;
  adapterWhitelist_gte?: Maybe<Scalars['String']>;
  adapterWhitelist_lte?: Maybe<Scalars['String']>;
  adapterWhitelist_in?: Maybe<Array<Scalars['String']>>;
  adapterWhitelist_not_in?: Maybe<Array<Scalars['String']>>;
  adapterWhitelist_contains?: Maybe<Scalars['String']>;
  adapterWhitelist_not_contains?: Maybe<Scalars['String']>;
  adapterWhitelist_starts_with?: Maybe<Scalars['String']>;
  adapterWhitelist_not_starts_with?: Maybe<Scalars['String']>;
  adapterWhitelist_ends_with?: Maybe<Scalars['String']>;
  adapterWhitelist_not_ends_with?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_not?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_gt?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_lt?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_gte?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_lte?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_in?: Maybe<Array<Scalars['String']>>;
  aggregatedDerivativePriceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  aggregatedDerivativePriceFeed_contains?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_not_contains?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_starts_with?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_not_starts_with?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_ends_with?: Maybe<Scalars['String']>;
  aggregatedDerivativePriceFeed_not_ends_with?: Maybe<Scalars['String']>;
  assetBlacklist?: Maybe<Scalars['String']>;
  assetBlacklist_not?: Maybe<Scalars['String']>;
  assetBlacklist_gt?: Maybe<Scalars['String']>;
  assetBlacklist_lt?: Maybe<Scalars['String']>;
  assetBlacklist_gte?: Maybe<Scalars['String']>;
  assetBlacklist_lte?: Maybe<Scalars['String']>;
  assetBlacklist_in?: Maybe<Array<Scalars['String']>>;
  assetBlacklist_not_in?: Maybe<Array<Scalars['String']>>;
  assetBlacklist_contains?: Maybe<Scalars['String']>;
  assetBlacklist_not_contains?: Maybe<Scalars['String']>;
  assetBlacklist_starts_with?: Maybe<Scalars['String']>;
  assetBlacklist_not_starts_with?: Maybe<Scalars['String']>;
  assetBlacklist_ends_with?: Maybe<Scalars['String']>;
  assetBlacklist_not_ends_with?: Maybe<Scalars['String']>;
  assetWhitelist?: Maybe<Scalars['String']>;
  assetWhitelist_not?: Maybe<Scalars['String']>;
  assetWhitelist_gt?: Maybe<Scalars['String']>;
  assetWhitelist_lt?: Maybe<Scalars['String']>;
  assetWhitelist_gte?: Maybe<Scalars['String']>;
  assetWhitelist_lte?: Maybe<Scalars['String']>;
  assetWhitelist_in?: Maybe<Array<Scalars['String']>>;
  assetWhitelist_not_in?: Maybe<Array<Scalars['String']>>;
  assetWhitelist_contains?: Maybe<Scalars['String']>;
  assetWhitelist_not_contains?: Maybe<Scalars['String']>;
  assetWhitelist_starts_with?: Maybe<Scalars['String']>;
  assetWhitelist_not_starts_with?: Maybe<Scalars['String']>;
  assetWhitelist_ends_with?: Maybe<Scalars['String']>;
  assetWhitelist_not_ends_with?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_not?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_gt?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_lt?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_gte?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_lte?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_in?: Maybe<Array<Scalars['String']>>;
  buySharesCallerWhitelist_not_in?: Maybe<Array<Scalars['String']>>;
  buySharesCallerWhitelist_contains?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_not_contains?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_starts_with?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_not_starts_with?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_ends_with?: Maybe<Scalars['String']>;
  buySharesCallerWhitelist_not_ends_with?: Maybe<Scalars['String']>;
  chaiAdapter?: Maybe<Scalars['String']>;
  chaiAdapter_not?: Maybe<Scalars['String']>;
  chaiAdapter_gt?: Maybe<Scalars['String']>;
  chaiAdapter_lt?: Maybe<Scalars['String']>;
  chaiAdapter_gte?: Maybe<Scalars['String']>;
  chaiAdapter_lte?: Maybe<Scalars['String']>;
  chaiAdapter_in?: Maybe<Array<Scalars['String']>>;
  chaiAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  chaiAdapter_contains?: Maybe<Scalars['String']>;
  chaiAdapter_not_contains?: Maybe<Scalars['String']>;
  chaiAdapter_starts_with?: Maybe<Scalars['String']>;
  chaiAdapter_not_starts_with?: Maybe<Scalars['String']>;
  chaiAdapter_ends_with?: Maybe<Scalars['String']>;
  chaiAdapter_not_ends_with?: Maybe<Scalars['String']>;
  chaiIntegratee?: Maybe<Scalars['String']>;
  chaiIntegratee_not?: Maybe<Scalars['String']>;
  chaiIntegratee_gt?: Maybe<Scalars['String']>;
  chaiIntegratee_lt?: Maybe<Scalars['String']>;
  chaiIntegratee_gte?: Maybe<Scalars['String']>;
  chaiIntegratee_lte?: Maybe<Scalars['String']>;
  chaiIntegratee_in?: Maybe<Array<Scalars['String']>>;
  chaiIntegratee_not_in?: Maybe<Array<Scalars['String']>>;
  chaiIntegratee_contains?: Maybe<Scalars['String']>;
  chaiIntegratee_not_contains?: Maybe<Scalars['String']>;
  chaiIntegratee_starts_with?: Maybe<Scalars['String']>;
  chaiIntegratee_not_starts_with?: Maybe<Scalars['String']>;
  chaiIntegratee_ends_with?: Maybe<Scalars['String']>;
  chaiIntegratee_not_ends_with?: Maybe<Scalars['String']>;
  chainlinkPriceFeed?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_not?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_gt?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_lt?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_gte?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_lte?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_in?: Maybe<Array<Scalars['String']>>;
  chainlinkPriceFeed_not_in?: Maybe<Array<Scalars['String']>>;
  chainlinkPriceFeed_contains?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_not_contains?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_starts_with?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_not_starts_with?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_ends_with?: Maybe<Scalars['String']>;
  chainlinkPriceFeed_not_ends_with?: Maybe<Scalars['String']>;
  compoundAdapter?: Maybe<Scalars['String']>;
  compoundAdapter_not?: Maybe<Scalars['String']>;
  compoundAdapter_gt?: Maybe<Scalars['String']>;
  compoundAdapter_lt?: Maybe<Scalars['String']>;
  compoundAdapter_gte?: Maybe<Scalars['String']>;
  compoundAdapter_lte?: Maybe<Scalars['String']>;
  compoundAdapter_in?: Maybe<Array<Scalars['String']>>;
  compoundAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  compoundAdapter_contains?: Maybe<Scalars['String']>;
  compoundAdapter_not_contains?: Maybe<Scalars['String']>;
  compoundAdapter_starts_with?: Maybe<Scalars['String']>;
  compoundAdapter_not_starts_with?: Maybe<Scalars['String']>;
  compoundAdapter_ends_with?: Maybe<Scalars['String']>;
  compoundAdapter_not_ends_with?: Maybe<Scalars['String']>;
  comptrollerLib?: Maybe<Scalars['String']>;
  comptrollerLib_not?: Maybe<Scalars['String']>;
  comptrollerLib_gt?: Maybe<Scalars['String']>;
  comptrollerLib_lt?: Maybe<Scalars['String']>;
  comptrollerLib_gte?: Maybe<Scalars['String']>;
  comptrollerLib_lte?: Maybe<Scalars['String']>;
  comptrollerLib_in?: Maybe<Array<Scalars['String']>>;
  comptrollerLib_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerLib_contains?: Maybe<Scalars['String']>;
  comptrollerLib_not_contains?: Maybe<Scalars['String']>;
  comptrollerLib_starts_with?: Maybe<Scalars['String']>;
  comptrollerLib_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerLib_ends_with?: Maybe<Scalars['String']>;
  comptrollerLib_not_ends_with?: Maybe<Scalars['String']>;
  dispatcher?: Maybe<Scalars['String']>;
  dispatcher_not?: Maybe<Scalars['String']>;
  dispatcher_gt?: Maybe<Scalars['String']>;
  dispatcher_lt?: Maybe<Scalars['String']>;
  dispatcher_gte?: Maybe<Scalars['String']>;
  dispatcher_lte?: Maybe<Scalars['String']>;
  dispatcher_in?: Maybe<Array<Scalars['String']>>;
  dispatcher_not_in?: Maybe<Array<Scalars['String']>>;
  dispatcher_contains?: Maybe<Scalars['String']>;
  dispatcher_not_contains?: Maybe<Scalars['String']>;
  dispatcher_starts_with?: Maybe<Scalars['String']>;
  dispatcher_not_starts_with?: Maybe<Scalars['String']>;
  dispatcher_ends_with?: Maybe<Scalars['String']>;
  dispatcher_not_ends_with?: Maybe<Scalars['String']>;
  entranceRateBurnFee?: Maybe<Scalars['String']>;
  entranceRateBurnFee_not?: Maybe<Scalars['String']>;
  entranceRateBurnFee_gt?: Maybe<Scalars['String']>;
  entranceRateBurnFee_lt?: Maybe<Scalars['String']>;
  entranceRateBurnFee_gte?: Maybe<Scalars['String']>;
  entranceRateBurnFee_lte?: Maybe<Scalars['String']>;
  entranceRateBurnFee_in?: Maybe<Array<Scalars['String']>>;
  entranceRateBurnFee_not_in?: Maybe<Array<Scalars['String']>>;
  entranceRateBurnFee_contains?: Maybe<Scalars['String']>;
  entranceRateBurnFee_not_contains?: Maybe<Scalars['String']>;
  entranceRateBurnFee_starts_with?: Maybe<Scalars['String']>;
  entranceRateBurnFee_not_starts_with?: Maybe<Scalars['String']>;
  entranceRateBurnFee_ends_with?: Maybe<Scalars['String']>;
  entranceRateBurnFee_not_ends_with?: Maybe<Scalars['String']>;
  entranceRateDirectFee?: Maybe<Scalars['String']>;
  entranceRateDirectFee_not?: Maybe<Scalars['String']>;
  entranceRateDirectFee_gt?: Maybe<Scalars['String']>;
  entranceRateDirectFee_lt?: Maybe<Scalars['String']>;
  entranceRateDirectFee_gte?: Maybe<Scalars['String']>;
  entranceRateDirectFee_lte?: Maybe<Scalars['String']>;
  entranceRateDirectFee_in?: Maybe<Array<Scalars['String']>>;
  entranceRateDirectFee_not_in?: Maybe<Array<Scalars['String']>>;
  entranceRateDirectFee_contains?: Maybe<Scalars['String']>;
  entranceRateDirectFee_not_contains?: Maybe<Scalars['String']>;
  entranceRateDirectFee_starts_with?: Maybe<Scalars['String']>;
  entranceRateDirectFee_not_starts_with?: Maybe<Scalars['String']>;
  entranceRateDirectFee_ends_with?: Maybe<Scalars['String']>;
  entranceRateDirectFee_not_ends_with?: Maybe<Scalars['String']>;
  feeManager?: Maybe<Scalars['String']>;
  feeManager_not?: Maybe<Scalars['String']>;
  feeManager_gt?: Maybe<Scalars['String']>;
  feeManager_lt?: Maybe<Scalars['String']>;
  feeManager_gte?: Maybe<Scalars['String']>;
  feeManager_lte?: Maybe<Scalars['String']>;
  feeManager_in?: Maybe<Array<Scalars['String']>>;
  feeManager_not_in?: Maybe<Array<Scalars['String']>>;
  feeManager_contains?: Maybe<Scalars['String']>;
  feeManager_not_contains?: Maybe<Scalars['String']>;
  feeManager_starts_with?: Maybe<Scalars['String']>;
  feeManager_not_starts_with?: Maybe<Scalars['String']>;
  feeManager_ends_with?: Maybe<Scalars['String']>;
  feeManager_not_ends_with?: Maybe<Scalars['String']>;
  fundActionsWrapper?: Maybe<Scalars['String']>;
  fundActionsWrapper_not?: Maybe<Scalars['String']>;
  fundActionsWrapper_gt?: Maybe<Scalars['String']>;
  fundActionsWrapper_lt?: Maybe<Scalars['String']>;
  fundActionsWrapper_gte?: Maybe<Scalars['String']>;
  fundActionsWrapper_lte?: Maybe<Scalars['String']>;
  fundActionsWrapper_in?: Maybe<Array<Scalars['String']>>;
  fundActionsWrapper_not_in?: Maybe<Array<Scalars['String']>>;
  fundActionsWrapper_contains?: Maybe<Scalars['String']>;
  fundActionsWrapper_not_contains?: Maybe<Scalars['String']>;
  fundActionsWrapper_starts_with?: Maybe<Scalars['String']>;
  fundActionsWrapper_not_starts_with?: Maybe<Scalars['String']>;
  fundActionsWrapper_ends_with?: Maybe<Scalars['String']>;
  fundActionsWrapper_not_ends_with?: Maybe<Scalars['String']>;
  fundDeployer?: Maybe<Scalars['String']>;
  fundDeployer_not?: Maybe<Scalars['String']>;
  fundDeployer_gt?: Maybe<Scalars['String']>;
  fundDeployer_lt?: Maybe<Scalars['String']>;
  fundDeployer_gte?: Maybe<Scalars['String']>;
  fundDeployer_lte?: Maybe<Scalars['String']>;
  fundDeployer_in?: Maybe<Array<Scalars['String']>>;
  fundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  fundDeployer_contains?: Maybe<Scalars['String']>;
  fundDeployer_not_contains?: Maybe<Scalars['String']>;
  fundDeployer_starts_with?: Maybe<Scalars['String']>;
  fundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  fundDeployer_ends_with?: Maybe<Scalars['String']>;
  fundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  guaranteedRedemption?: Maybe<Scalars['String']>;
  guaranteedRedemption_not?: Maybe<Scalars['String']>;
  guaranteedRedemption_gt?: Maybe<Scalars['String']>;
  guaranteedRedemption_lt?: Maybe<Scalars['String']>;
  guaranteedRedemption_gte?: Maybe<Scalars['String']>;
  guaranteedRedemption_lte?: Maybe<Scalars['String']>;
  guaranteedRedemption_in?: Maybe<Array<Scalars['String']>>;
  guaranteedRedemption_not_in?: Maybe<Array<Scalars['String']>>;
  guaranteedRedemption_contains?: Maybe<Scalars['String']>;
  guaranteedRedemption_not_contains?: Maybe<Scalars['String']>;
  guaranteedRedemption_starts_with?: Maybe<Scalars['String']>;
  guaranteedRedemption_not_starts_with?: Maybe<Scalars['String']>;
  guaranteedRedemption_ends_with?: Maybe<Scalars['String']>;
  guaranteedRedemption_not_ends_with?: Maybe<Scalars['String']>;
  integrationManager?: Maybe<Scalars['String']>;
  integrationManager_not?: Maybe<Scalars['String']>;
  integrationManager_gt?: Maybe<Scalars['String']>;
  integrationManager_lt?: Maybe<Scalars['String']>;
  integrationManager_gte?: Maybe<Scalars['String']>;
  integrationManager_lte?: Maybe<Scalars['String']>;
  integrationManager_in?: Maybe<Array<Scalars['String']>>;
  integrationManager_not_in?: Maybe<Array<Scalars['String']>>;
  integrationManager_contains?: Maybe<Scalars['String']>;
  integrationManager_not_contains?: Maybe<Scalars['String']>;
  integrationManager_starts_with?: Maybe<Scalars['String']>;
  integrationManager_not_starts_with?: Maybe<Scalars['String']>;
  integrationManager_ends_with?: Maybe<Scalars['String']>;
  integrationManager_not_ends_with?: Maybe<Scalars['String']>;
  investorWhitelist?: Maybe<Scalars['String']>;
  investorWhitelist_not?: Maybe<Scalars['String']>;
  investorWhitelist_gt?: Maybe<Scalars['String']>;
  investorWhitelist_lt?: Maybe<Scalars['String']>;
  investorWhitelist_gte?: Maybe<Scalars['String']>;
  investorWhitelist_lte?: Maybe<Scalars['String']>;
  investorWhitelist_in?: Maybe<Array<Scalars['String']>>;
  investorWhitelist_not_in?: Maybe<Array<Scalars['String']>>;
  investorWhitelist_contains?: Maybe<Scalars['String']>;
  investorWhitelist_not_contains?: Maybe<Scalars['String']>;
  investorWhitelist_starts_with?: Maybe<Scalars['String']>;
  investorWhitelist_not_starts_with?: Maybe<Scalars['String']>;
  investorWhitelist_ends_with?: Maybe<Scalars['String']>;
  investorWhitelist_not_ends_with?: Maybe<Scalars['String']>;
  kyberAdapter?: Maybe<Scalars['String']>;
  kyberAdapter_not?: Maybe<Scalars['String']>;
  kyberAdapter_gt?: Maybe<Scalars['String']>;
  kyberAdapter_lt?: Maybe<Scalars['String']>;
  kyberAdapter_gte?: Maybe<Scalars['String']>;
  kyberAdapter_lte?: Maybe<Scalars['String']>;
  kyberAdapter_in?: Maybe<Array<Scalars['String']>>;
  kyberAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  kyberAdapter_contains?: Maybe<Scalars['String']>;
  kyberAdapter_not_contains?: Maybe<Scalars['String']>;
  kyberAdapter_starts_with?: Maybe<Scalars['String']>;
  kyberAdapter_not_starts_with?: Maybe<Scalars['String']>;
  kyberAdapter_ends_with?: Maybe<Scalars['String']>;
  kyberAdapter_not_ends_with?: Maybe<Scalars['String']>;
  kyberIntegratee?: Maybe<Scalars['String']>;
  kyberIntegratee_not?: Maybe<Scalars['String']>;
  kyberIntegratee_gt?: Maybe<Scalars['String']>;
  kyberIntegratee_lt?: Maybe<Scalars['String']>;
  kyberIntegratee_gte?: Maybe<Scalars['String']>;
  kyberIntegratee_lte?: Maybe<Scalars['String']>;
  kyberIntegratee_in?: Maybe<Array<Scalars['String']>>;
  kyberIntegratee_not_in?: Maybe<Array<Scalars['String']>>;
  kyberIntegratee_contains?: Maybe<Scalars['String']>;
  kyberIntegratee_not_contains?: Maybe<Scalars['String']>;
  kyberIntegratee_starts_with?: Maybe<Scalars['String']>;
  kyberIntegratee_not_starts_with?: Maybe<Scalars['String']>;
  kyberIntegratee_ends_with?: Maybe<Scalars['String']>;
  kyberIntegratee_not_ends_with?: Maybe<Scalars['String']>;
  managementFee?: Maybe<Scalars['String']>;
  managementFee_not?: Maybe<Scalars['String']>;
  managementFee_gt?: Maybe<Scalars['String']>;
  managementFee_lt?: Maybe<Scalars['String']>;
  managementFee_gte?: Maybe<Scalars['String']>;
  managementFee_lte?: Maybe<Scalars['String']>;
  managementFee_in?: Maybe<Array<Scalars['String']>>;
  managementFee_not_in?: Maybe<Array<Scalars['String']>>;
  managementFee_contains?: Maybe<Scalars['String']>;
  managementFee_not_contains?: Maybe<Scalars['String']>;
  managementFee_starts_with?: Maybe<Scalars['String']>;
  managementFee_not_starts_with?: Maybe<Scalars['String']>;
  managementFee_ends_with?: Maybe<Scalars['String']>;
  managementFee_not_ends_with?: Maybe<Scalars['String']>;
  maxConcentration?: Maybe<Scalars['String']>;
  maxConcentration_not?: Maybe<Scalars['String']>;
  maxConcentration_gt?: Maybe<Scalars['String']>;
  maxConcentration_lt?: Maybe<Scalars['String']>;
  maxConcentration_gte?: Maybe<Scalars['String']>;
  maxConcentration_lte?: Maybe<Scalars['String']>;
  maxConcentration_in?: Maybe<Array<Scalars['String']>>;
  maxConcentration_not_in?: Maybe<Array<Scalars['String']>>;
  maxConcentration_contains?: Maybe<Scalars['String']>;
  maxConcentration_not_contains?: Maybe<Scalars['String']>;
  maxConcentration_starts_with?: Maybe<Scalars['String']>;
  maxConcentration_not_starts_with?: Maybe<Scalars['String']>;
  maxConcentration_ends_with?: Maybe<Scalars['String']>;
  maxConcentration_not_ends_with?: Maybe<Scalars['String']>;
  minMaxInvestment?: Maybe<Scalars['String']>;
  minMaxInvestment_not?: Maybe<Scalars['String']>;
  minMaxInvestment_gt?: Maybe<Scalars['String']>;
  minMaxInvestment_lt?: Maybe<Scalars['String']>;
  minMaxInvestment_gte?: Maybe<Scalars['String']>;
  minMaxInvestment_lte?: Maybe<Scalars['String']>;
  minMaxInvestment_in?: Maybe<Array<Scalars['String']>>;
  minMaxInvestment_not_in?: Maybe<Array<Scalars['String']>>;
  minMaxInvestment_contains?: Maybe<Scalars['String']>;
  minMaxInvestment_not_contains?: Maybe<Scalars['String']>;
  minMaxInvestment_starts_with?: Maybe<Scalars['String']>;
  minMaxInvestment_not_starts_with?: Maybe<Scalars['String']>;
  minMaxInvestment_ends_with?: Maybe<Scalars['String']>;
  minMaxInvestment_not_ends_with?: Maybe<Scalars['String']>;
  paraSwapAdapter?: Maybe<Scalars['String']>;
  paraSwapAdapter_not?: Maybe<Scalars['String']>;
  paraSwapAdapter_gt?: Maybe<Scalars['String']>;
  paraSwapAdapter_lt?: Maybe<Scalars['String']>;
  paraSwapAdapter_gte?: Maybe<Scalars['String']>;
  paraSwapAdapter_lte?: Maybe<Scalars['String']>;
  paraSwapAdapter_in?: Maybe<Array<Scalars['String']>>;
  paraSwapAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  paraSwapAdapter_contains?: Maybe<Scalars['String']>;
  paraSwapAdapter_not_contains?: Maybe<Scalars['String']>;
  paraSwapAdapter_starts_with?: Maybe<Scalars['String']>;
  paraSwapAdapter_not_starts_with?: Maybe<Scalars['String']>;
  paraSwapAdapter_ends_with?: Maybe<Scalars['String']>;
  paraSwapAdapter_not_ends_with?: Maybe<Scalars['String']>;
  performanceFee?: Maybe<Scalars['String']>;
  performanceFee_not?: Maybe<Scalars['String']>;
  performanceFee_gt?: Maybe<Scalars['String']>;
  performanceFee_lt?: Maybe<Scalars['String']>;
  performanceFee_gte?: Maybe<Scalars['String']>;
  performanceFee_lte?: Maybe<Scalars['String']>;
  performanceFee_in?: Maybe<Array<Scalars['String']>>;
  performanceFee_not_in?: Maybe<Array<Scalars['String']>>;
  performanceFee_contains?: Maybe<Scalars['String']>;
  performanceFee_not_contains?: Maybe<Scalars['String']>;
  performanceFee_starts_with?: Maybe<Scalars['String']>;
  performanceFee_not_starts_with?: Maybe<Scalars['String']>;
  performanceFee_ends_with?: Maybe<Scalars['String']>;
  performanceFee_not_ends_with?: Maybe<Scalars['String']>;
  policyManager?: Maybe<Scalars['String']>;
  policyManager_not?: Maybe<Scalars['String']>;
  policyManager_gt?: Maybe<Scalars['String']>;
  policyManager_lt?: Maybe<Scalars['String']>;
  policyManager_gte?: Maybe<Scalars['String']>;
  policyManager_lte?: Maybe<Scalars['String']>;
  policyManager_in?: Maybe<Array<Scalars['String']>>;
  policyManager_not_in?: Maybe<Array<Scalars['String']>>;
  policyManager_contains?: Maybe<Scalars['String']>;
  policyManager_not_contains?: Maybe<Scalars['String']>;
  policyManager_starts_with?: Maybe<Scalars['String']>;
  policyManager_not_starts_with?: Maybe<Scalars['String']>;
  policyManager_ends_with?: Maybe<Scalars['String']>;
  policyManager_not_ends_with?: Maybe<Scalars['String']>;
  synthetixAdapter?: Maybe<Scalars['String']>;
  synthetixAdapter_not?: Maybe<Scalars['String']>;
  synthetixAdapter_gt?: Maybe<Scalars['String']>;
  synthetixAdapter_lt?: Maybe<Scalars['String']>;
  synthetixAdapter_gte?: Maybe<Scalars['String']>;
  synthetixAdapter_lte?: Maybe<Scalars['String']>;
  synthetixAdapter_in?: Maybe<Array<Scalars['String']>>;
  synthetixAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  synthetixAdapter_contains?: Maybe<Scalars['String']>;
  synthetixAdapter_not_contains?: Maybe<Scalars['String']>;
  synthetixAdapter_starts_with?: Maybe<Scalars['String']>;
  synthetixAdapter_not_starts_with?: Maybe<Scalars['String']>;
  synthetixAdapter_ends_with?: Maybe<Scalars['String']>;
  synthetixAdapter_not_ends_with?: Maybe<Scalars['String']>;
  synthetixAddressResolver?: Maybe<Scalars['String']>;
  synthetixAddressResolver_not?: Maybe<Scalars['String']>;
  synthetixAddressResolver_gt?: Maybe<Scalars['String']>;
  synthetixAddressResolver_lt?: Maybe<Scalars['String']>;
  synthetixAddressResolver_gte?: Maybe<Scalars['String']>;
  synthetixAddressResolver_lte?: Maybe<Scalars['String']>;
  synthetixAddressResolver_in?: Maybe<Array<Scalars['String']>>;
  synthetixAddressResolver_not_in?: Maybe<Array<Scalars['String']>>;
  synthetixAddressResolver_contains?: Maybe<Scalars['String']>;
  synthetixAddressResolver_not_contains?: Maybe<Scalars['String']>;
  synthetixAddressResolver_starts_with?: Maybe<Scalars['String']>;
  synthetixAddressResolver_not_starts_with?: Maybe<Scalars['String']>;
  synthetixAddressResolver_ends_with?: Maybe<Scalars['String']>;
  synthetixAddressResolver_not_ends_with?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_not?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_gt?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_lt?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_gte?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_lte?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_in?: Maybe<Array<Scalars['String']>>;
  synthetixDelegateApprovals_not_in?: Maybe<Array<Scalars['String']>>;
  synthetixDelegateApprovals_contains?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_not_contains?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_starts_with?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_not_starts_with?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_ends_with?: Maybe<Scalars['String']>;
  synthetixDelegateApprovals_not_ends_with?: Maybe<Scalars['String']>;
  synthetixIntegratee?: Maybe<Scalars['String']>;
  synthetixIntegratee_not?: Maybe<Scalars['String']>;
  synthetixIntegratee_gt?: Maybe<Scalars['String']>;
  synthetixIntegratee_lt?: Maybe<Scalars['String']>;
  synthetixIntegratee_gte?: Maybe<Scalars['String']>;
  synthetixIntegratee_lte?: Maybe<Scalars['String']>;
  synthetixIntegratee_in?: Maybe<Array<Scalars['String']>>;
  synthetixIntegratee_not_in?: Maybe<Array<Scalars['String']>>;
  synthetixIntegratee_contains?: Maybe<Scalars['String']>;
  synthetixIntegratee_not_contains?: Maybe<Scalars['String']>;
  synthetixIntegratee_starts_with?: Maybe<Scalars['String']>;
  synthetixIntegratee_not_starts_with?: Maybe<Scalars['String']>;
  synthetixIntegratee_ends_with?: Maybe<Scalars['String']>;
  synthetixIntegratee_not_ends_with?: Maybe<Scalars['String']>;
  trackedAssetsAdapter?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_not?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_gt?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_lt?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_gte?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_lte?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_in?: Maybe<Array<Scalars['String']>>;
  trackedAssetsAdapter_not_in?: Maybe<Array<Scalars['String']>>;
  trackedAssetsAdapter_contains?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_not_contains?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_starts_with?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_not_starts_with?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_ends_with?: Maybe<Scalars['String']>;
  trackedAssetsAdapter_not_ends_with?: Maybe<Scalars['String']>;
  uniswapV2Adapter?: Maybe<Scalars['String']>;
  uniswapV2Adapter_not?: Maybe<Scalars['String']>;
  uniswapV2Adapter_gt?: Maybe<Scalars['String']>;
  uniswapV2Adapter_lt?: Maybe<Scalars['String']>;
  uniswapV2Adapter_gte?: Maybe<Scalars['String']>;
  uniswapV2Adapter_lte?: Maybe<Scalars['String']>;
  uniswapV2Adapter_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2Adapter_not_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2Adapter_contains?: Maybe<Scalars['String']>;
  uniswapV2Adapter_not_contains?: Maybe<Scalars['String']>;
  uniswapV2Adapter_starts_with?: Maybe<Scalars['String']>;
  uniswapV2Adapter_not_starts_with?: Maybe<Scalars['String']>;
  uniswapV2Adapter_ends_with?: Maybe<Scalars['String']>;
  uniswapV2Adapter_not_ends_with?: Maybe<Scalars['String']>;
  uniswapV2Integratee?: Maybe<Scalars['String']>;
  uniswapV2Integratee_not?: Maybe<Scalars['String']>;
  uniswapV2Integratee_gt?: Maybe<Scalars['String']>;
  uniswapV2Integratee_lt?: Maybe<Scalars['String']>;
  uniswapV2Integratee_gte?: Maybe<Scalars['String']>;
  uniswapV2Integratee_lte?: Maybe<Scalars['String']>;
  uniswapV2Integratee_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2Integratee_not_in?: Maybe<Array<Scalars['String']>>;
  uniswapV2Integratee_contains?: Maybe<Scalars['String']>;
  uniswapV2Integratee_not_contains?: Maybe<Scalars['String']>;
  uniswapV2Integratee_starts_with?: Maybe<Scalars['String']>;
  uniswapV2Integratee_not_starts_with?: Maybe<Scalars['String']>;
  uniswapV2Integratee_ends_with?: Maybe<Scalars['String']>;
  uniswapV2Integratee_not_ends_with?: Maybe<Scalars['String']>;
  valueInterpreter?: Maybe<Scalars['String']>;
  valueInterpreter_not?: Maybe<Scalars['String']>;
  valueInterpreter_gt?: Maybe<Scalars['String']>;
  valueInterpreter_lt?: Maybe<Scalars['String']>;
  valueInterpreter_gte?: Maybe<Scalars['String']>;
  valueInterpreter_lte?: Maybe<Scalars['String']>;
  valueInterpreter_in?: Maybe<Array<Scalars['String']>>;
  valueInterpreter_not_in?: Maybe<Array<Scalars['String']>>;
  valueInterpreter_contains?: Maybe<Scalars['String']>;
  valueInterpreter_not_contains?: Maybe<Scalars['String']>;
  valueInterpreter_starts_with?: Maybe<Scalars['String']>;
  valueInterpreter_not_starts_with?: Maybe<Scalars['String']>;
  valueInterpreter_ends_with?: Maybe<Scalars['String']>;
  valueInterpreter_not_ends_with?: Maybe<Scalars['String']>;
  vaultLib?: Maybe<Scalars['String']>;
  vaultLib_not?: Maybe<Scalars['String']>;
  vaultLib_gt?: Maybe<Scalars['String']>;
  vaultLib_lt?: Maybe<Scalars['String']>;
  vaultLib_gte?: Maybe<Scalars['String']>;
  vaultLib_lte?: Maybe<Scalars['String']>;
  vaultLib_in?: Maybe<Array<Scalars['String']>>;
  vaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  vaultLib_contains?: Maybe<Scalars['String']>;
  vaultLib_not_contains?: Maybe<Scalars['String']>;
  vaultLib_starts_with?: Maybe<Scalars['String']>;
  vaultLib_not_starts_with?: Maybe<Scalars['String']>;
  vaultLib_ends_with?: Maybe<Scalars['String']>;
  vaultLib_not_ends_with?: Maybe<Scalars['String']>;
  wethToken?: Maybe<Scalars['String']>;
  wethToken_not?: Maybe<Scalars['String']>;
  wethToken_gt?: Maybe<Scalars['String']>;
  wethToken_lt?: Maybe<Scalars['String']>;
  wethToken_gte?: Maybe<Scalars['String']>;
  wethToken_lte?: Maybe<Scalars['String']>;
  wethToken_in?: Maybe<Array<Scalars['String']>>;
  wethToken_not_in?: Maybe<Array<Scalars['String']>>;
  wethToken_contains?: Maybe<Scalars['String']>;
  wethToken_not_contains?: Maybe<Scalars['String']>;
  wethToken_starts_with?: Maybe<Scalars['String']>;
  wethToken_not_starts_with?: Maybe<Scalars['String']>;
  wethToken_ends_with?: Maybe<Scalars['String']>;
  wethToken_not_ends_with?: Maybe<Scalars['String']>;
  zeroExV2Adapter?: Maybe<Scalars['String']>;
  zeroExV2Adapter_not?: Maybe<Scalars['String']>;
  zeroExV2Adapter_gt?: Maybe<Scalars['String']>;
  zeroExV2Adapter_lt?: Maybe<Scalars['String']>;
  zeroExV2Adapter_gte?: Maybe<Scalars['String']>;
  zeroExV2Adapter_lte?: Maybe<Scalars['String']>;
  zeroExV2Adapter_in?: Maybe<Array<Scalars['String']>>;
  zeroExV2Adapter_not_in?: Maybe<Array<Scalars['String']>>;
  zeroExV2Adapter_contains?: Maybe<Scalars['String']>;
  zeroExV2Adapter_not_contains?: Maybe<Scalars['String']>;
  zeroExV2Adapter_starts_with?: Maybe<Scalars['String']>;
  zeroExV2Adapter_not_starts_with?: Maybe<Scalars['String']>;
  zeroExV2Adapter_ends_with?: Maybe<Scalars['String']>;
  zeroExV2Adapter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Release_OrderBy {
  Id = 'id',
  Current = 'current',
  Open = 'open',
  Close = 'close',
  Funds = 'funds',
  Network = 'network',
  AdapterBlacklist = 'adapterBlacklist',
  AdapterWhitelist = 'adapterWhitelist',
  AggregatedDerivativePriceFeed = 'aggregatedDerivativePriceFeed',
  AssetBlacklist = 'assetBlacklist',
  AssetWhitelist = 'assetWhitelist',
  BuySharesCallerWhitelist = 'buySharesCallerWhitelist',
  ChaiAdapter = 'chaiAdapter',
  ChaiIntegratee = 'chaiIntegratee',
  ChainlinkPriceFeed = 'chainlinkPriceFeed',
  CompoundAdapter = 'compoundAdapter',
  ComptrollerLib = 'comptrollerLib',
  Dispatcher = 'dispatcher',
  EntranceRateBurnFee = 'entranceRateBurnFee',
  EntranceRateDirectFee = 'entranceRateDirectFee',
  FeeManager = 'feeManager',
  FundActionsWrapper = 'fundActionsWrapper',
  FundDeployer = 'fundDeployer',
  GuaranteedRedemption = 'guaranteedRedemption',
  IntegrationManager = 'integrationManager',
  InvestorWhitelist = 'investorWhitelist',
  KyberAdapter = 'kyberAdapter',
  KyberIntegratee = 'kyberIntegratee',
  ManagementFee = 'managementFee',
  MaxConcentration = 'maxConcentration',
  MinMaxInvestment = 'minMaxInvestment',
  ParaSwapAdapter = 'paraSwapAdapter',
  PerformanceFee = 'performanceFee',
  PolicyManager = 'policyManager',
  SynthetixAdapter = 'synthetixAdapter',
  SynthetixAddressResolver = 'synthetixAddressResolver',
  SynthetixDelegateApprovals = 'synthetixDelegateApprovals',
  SynthetixIntegratee = 'synthetixIntegratee',
  TrackedAssetsAdapter = 'trackedAssetsAdapter',
  UniswapV2Adapter = 'uniswapV2Adapter',
  UniswapV2Integratee = 'uniswapV2Integratee',
  ValueInterpreter = 'valueInterpreter',
  VaultLib = 'vaultLib',
  WethToken = 'wethToken',
  ZeroExV2Adapter = 'zeroExV2Adapter'
}

export enum SettlementType {
  None = 'None',
  Direct = 'Direct',
  Mint = 'Mint',
  Burn = 'Burn',
  MintSharesOutstanding = 'MintSharesOutstanding',
  BurnSharesOutstanding = 'BurnSharesOutstanding'
}

export enum ShareChangeType {
  SharesBought = 'SharesBought',
  SharesRedeemed = 'SharesRedeemed',
  FeeSettledForFund = 'FeeSettledForFund',
  AllSharesOutstandingForcePaidForFund = 'AllSharesOutstandingForcePaidForFund',
  SharesOutstandingPaidForFund = 'SharesOutstandingPaidForFund'
}

export type ShareState = FundStateInterface & {
  __typename?: 'ShareState';
  id: Scalars['ID'];
  fund: Fund;
  timestamp: Scalars['BigInt'];
  totalSupply: Scalars['BigDecimal'];
  outstandingForFees: Scalars['BigDecimal'];
  events: Array<FundEventInterface>;
};


export type ShareStateEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type ShareState_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  outstandingForFees?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_not?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_gt?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_lt?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_gte?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_lte?: Maybe<Scalars['BigDecimal']>;
  outstandingForFees_in?: Maybe<Array<Scalars['BigDecimal']>>;
  outstandingForFees_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum ShareState_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Timestamp = 'timestamp',
  TotalSupply = 'totalSupply',
  OutstandingForFees = 'outstandingForFees',
  Events = 'events'
}

export type SharesBoughtEvent = EventInterface & FundEventInterface & SharesChangeInterface & InvestmentSharesChangeInterface & {
  __typename?: 'SharesBoughtEvent';
  id: Scalars['ID'];
  fund: Fund;
  type: ShareChangeType;
  account: Account;
  investor: Account;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  asset: Asset;
  investmentAmount: Scalars['BigDecimal'];
  sharesIssued: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  fundState: FundState;
  transaction: Transaction;
  calculations: CalculationState;
};

export type SharesBoughtEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  investmentAmount?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_not?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_gt?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_lt?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_gte?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_lte?: Maybe<Scalars['BigDecimal']>;
  investmentAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  investmentAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesIssued?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_not?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_gt?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_lt?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_gte?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_lte?: Maybe<Scalars['BigDecimal']>;
  sharesIssued_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesIssued_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SharesBoughtEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Type = 'type',
  Account = 'account',
  Investor = 'investor',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  Asset = 'asset',
  InvestmentAmount = 'investmentAmount',
  SharesIssued = 'sharesIssued',
  Timestamp = 'timestamp',
  FundState = 'fundState',
  Transaction = 'transaction',
  Calculations = 'calculations'
}

export type SharesChangeInterface = {
  id: Scalars['ID'];
  fund: Fund;
  investor: Account;
  timestamp: Scalars['BigInt'];
  type: ShareChangeType;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  fundState: FundState;
  transaction: Transaction;
  calculations: CalculationState;
};

export type SharesChangeInterface_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SharesChangeInterface_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Type = 'type',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  FundState = 'fundState',
  Transaction = 'transaction',
  Calculations = 'calculations'
}

export type SharesOutstandingPaidForFundEvent = EventInterface & FundEventInterface & SharesChangeInterface & FeeSharesChangeInterface & {
  __typename?: 'SharesOutstandingPaidForFundEvent';
  id: Scalars['ID'];
  fund: Fund;
  type: ShareChangeType;
  account: Account;
  investor: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  comptrollerProxy: Scalars['String'];
  fee: Fee;
  sharesDue: Scalars['BigDecimal'];
  calculations: CalculationState;
  fundState: FundState;
};

export type SharesOutstandingPaidForFundEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  comptrollerProxy?: Maybe<Scalars['String']>;
  comptrollerProxy_not?: Maybe<Scalars['String']>;
  comptrollerProxy_gt?: Maybe<Scalars['String']>;
  comptrollerProxy_lt?: Maybe<Scalars['String']>;
  comptrollerProxy_gte?: Maybe<Scalars['String']>;
  comptrollerProxy_lte?: Maybe<Scalars['String']>;
  comptrollerProxy_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_not_in?: Maybe<Array<Scalars['String']>>;
  comptrollerProxy_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_not_contains?: Maybe<Scalars['String']>;
  comptrollerProxy_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_starts_with?: Maybe<Scalars['String']>;
  comptrollerProxy_ends_with?: Maybe<Scalars['String']>;
  comptrollerProxy_not_ends_with?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  fee_not?: Maybe<Scalars['String']>;
  fee_gt?: Maybe<Scalars['String']>;
  fee_lt?: Maybe<Scalars['String']>;
  fee_gte?: Maybe<Scalars['String']>;
  fee_lte?: Maybe<Scalars['String']>;
  fee_in?: Maybe<Array<Scalars['String']>>;
  fee_not_in?: Maybe<Array<Scalars['String']>>;
  fee_contains?: Maybe<Scalars['String']>;
  fee_not_contains?: Maybe<Scalars['String']>;
  fee_starts_with?: Maybe<Scalars['String']>;
  fee_not_starts_with?: Maybe<Scalars['String']>;
  fee_ends_with?: Maybe<Scalars['String']>;
  fee_not_ends_with?: Maybe<Scalars['String']>;
  sharesDue?: Maybe<Scalars['BigDecimal']>;
  sharesDue_not?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lt?: Maybe<Scalars['BigDecimal']>;
  sharesDue_gte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_lte?: Maybe<Scalars['BigDecimal']>;
  sharesDue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sharesDue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SharesOutstandingPaidForFundEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Type = 'type',
  Account = 'account',
  Investor = 'investor',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  ComptrollerProxy = 'comptrollerProxy',
  Fee = 'fee',
  SharesDue = 'sharesDue',
  Calculations = 'calculations',
  FundState = 'fundState'
}

export type SharesRedeemedEvent = EventInterface & FundEventInterface & SharesChangeInterface & InvestmentSharesChangeInterface & {
  __typename?: 'SharesRedeemedEvent';
  id: Scalars['ID'];
  fund: Fund;
  type: ShareChangeType;
  account: Account;
  investor: Account;
  investmentState: InvestmentState;
  shares: Scalars['BigDecimal'];
  payoutAssetAmounts: Array<AssetAmount>;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
  transaction: Transaction;
  calculations: CalculationState;
};


export type SharesRedeemedEventPayoutAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
};

export type SharesRedeemedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<ShareChangeType>;
  type_not?: Maybe<ShareChangeType>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  investor?: Maybe<Scalars['String']>;
  investor_not?: Maybe<Scalars['String']>;
  investor_gt?: Maybe<Scalars['String']>;
  investor_lt?: Maybe<Scalars['String']>;
  investor_gte?: Maybe<Scalars['String']>;
  investor_lte?: Maybe<Scalars['String']>;
  investor_in?: Maybe<Array<Scalars['String']>>;
  investor_not_in?: Maybe<Array<Scalars['String']>>;
  investor_contains?: Maybe<Scalars['String']>;
  investor_not_contains?: Maybe<Scalars['String']>;
  investor_starts_with?: Maybe<Scalars['String']>;
  investor_not_starts_with?: Maybe<Scalars['String']>;
  investor_ends_with?: Maybe<Scalars['String']>;
  investor_not_ends_with?: Maybe<Scalars['String']>;
  investmentState?: Maybe<Scalars['String']>;
  investmentState_not?: Maybe<Scalars['String']>;
  investmentState_gt?: Maybe<Scalars['String']>;
  investmentState_lt?: Maybe<Scalars['String']>;
  investmentState_gte?: Maybe<Scalars['String']>;
  investmentState_lte?: Maybe<Scalars['String']>;
  investmentState_in?: Maybe<Array<Scalars['String']>>;
  investmentState_not_in?: Maybe<Array<Scalars['String']>>;
  investmentState_contains?: Maybe<Scalars['String']>;
  investmentState_not_contains?: Maybe<Scalars['String']>;
  investmentState_starts_with?: Maybe<Scalars['String']>;
  investmentState_not_starts_with?: Maybe<Scalars['String']>;
  investmentState_ends_with?: Maybe<Scalars['String']>;
  investmentState_not_ends_with?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['BigDecimal']>;
  shares_not?: Maybe<Scalars['BigDecimal']>;
  shares_gt?: Maybe<Scalars['BigDecimal']>;
  shares_lt?: Maybe<Scalars['BigDecimal']>;
  shares_gte?: Maybe<Scalars['BigDecimal']>;
  shares_lte?: Maybe<Scalars['BigDecimal']>;
  shares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  payoutAssetAmounts?: Maybe<Array<Scalars['String']>>;
  payoutAssetAmounts_not?: Maybe<Array<Scalars['String']>>;
  payoutAssetAmounts_contains?: Maybe<Array<Scalars['String']>>;
  payoutAssetAmounts_not_contains?: Maybe<Array<Scalars['String']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  calculations?: Maybe<Scalars['String']>;
  calculations_not?: Maybe<Scalars['String']>;
  calculations_gt?: Maybe<Scalars['String']>;
  calculations_lt?: Maybe<Scalars['String']>;
  calculations_gte?: Maybe<Scalars['String']>;
  calculations_lte?: Maybe<Scalars['String']>;
  calculations_in?: Maybe<Array<Scalars['String']>>;
  calculations_not_in?: Maybe<Array<Scalars['String']>>;
  calculations_contains?: Maybe<Scalars['String']>;
  calculations_not_contains?: Maybe<Scalars['String']>;
  calculations_starts_with?: Maybe<Scalars['String']>;
  calculations_not_starts_with?: Maybe<Scalars['String']>;
  calculations_ends_with?: Maybe<Scalars['String']>;
  calculations_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SharesRedeemedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Type = 'type',
  Account = 'account',
  Investor = 'investor',
  InvestmentState = 'investmentState',
  Shares = 'shares',
  PayoutAssetAmounts = 'payoutAssetAmounts',
  Timestamp = 'timestamp',
  FundState = 'fundState',
  Transaction = 'transaction',
  Calculations = 'calculations'
}

export type SharesTokenSymbolSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'SharesTokenSymbolSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  sharesTokenSymbol: Scalars['String'];
};

export type SharesTokenSymbolSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  sharesTokenSymbol?: Maybe<Scalars['String']>;
  sharesTokenSymbol_not?: Maybe<Scalars['String']>;
  sharesTokenSymbol_gt?: Maybe<Scalars['String']>;
  sharesTokenSymbol_lt?: Maybe<Scalars['String']>;
  sharesTokenSymbol_gte?: Maybe<Scalars['String']>;
  sharesTokenSymbol_lte?: Maybe<Scalars['String']>;
  sharesTokenSymbol_in?: Maybe<Array<Scalars['String']>>;
  sharesTokenSymbol_not_in?: Maybe<Array<Scalars['String']>>;
  sharesTokenSymbol_contains?: Maybe<Scalars['String']>;
  sharesTokenSymbol_not_contains?: Maybe<Scalars['String']>;
  sharesTokenSymbol_starts_with?: Maybe<Scalars['String']>;
  sharesTokenSymbol_not_starts_with?: Maybe<Scalars['String']>;
  sharesTokenSymbol_ends_with?: Maybe<Scalars['String']>;
  sharesTokenSymbol_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SharesTokenSymbolSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  SharesTokenSymbol = 'sharesTokenSymbol'
}

export type Subscription = {
  __typename?: 'Subscription';
  newFundCreatedEvent?: Maybe<NewFundCreatedEvent>;
  newFundCreatedEvents: Array<NewFundCreatedEvent>;
  comptrollerProxyDeployedEvent?: Maybe<ComptrollerProxyDeployedEvent>;
  comptrollerProxyDeployedEvents: Array<ComptrollerProxyDeployedEvent>;
  vaultProxySetEvent?: Maybe<VaultProxySetEvent>;
  vaultProxySetEvents: Array<VaultProxySetEvent>;
  sharesBoughtEvent?: Maybe<SharesBoughtEvent>;
  sharesBoughtEvents: Array<SharesBoughtEvent>;
  sharesRedeemedEvent?: Maybe<SharesRedeemedEvent>;
  sharesRedeemedEvents: Array<SharesRedeemedEvent>;
  assetWithdrawnEvent?: Maybe<AssetWithdrawnEvent>;
  assetWithdrawnEvents: Array<AssetWithdrawnEvent>;
  trackedAssetAddedEvent?: Maybe<TrackedAssetAddedEvent>;
  trackedAssetAddedEvents: Array<TrackedAssetAddedEvent>;
  trackedAssetRemovedEvent?: Maybe<TrackedAssetRemovedEvent>;
  trackedAssetRemovedEvents: Array<TrackedAssetRemovedEvent>;
  authUserAddedForFundEvent?: Maybe<AuthUserAddedForFundEvent>;
  authUserAddedForFundEvents: Array<AuthUserAddedForFundEvent>;
  authUserRemovedForFundEvent?: Maybe<AuthUserRemovedForFundEvent>;
  authUserRemovedForFundEvents: Array<AuthUserRemovedForFundEvent>;
  callOnIntegrationExecutedForFundEvent?: Maybe<CallOnIntegrationExecutedForFundEvent>;
  callOnIntegrationExecutedForFundEvents: Array<CallOnIntegrationExecutedForFundEvent>;
  migrationSignaledEvent?: Maybe<MigrationSignaledEvent>;
  migrationSignaledEvents: Array<MigrationSignaledEvent>;
  migrationCancelledEvent?: Maybe<MigrationCancelledEvent>;
  migrationCancelledEvents: Array<MigrationCancelledEvent>;
  migrationExecutedEvent?: Maybe<MigrationExecutedEvent>;
  migrationExecutedEvents: Array<MigrationExecutedEvent>;
  migrationInCancelHookFailedEvent?: Maybe<MigrationInCancelHookFailedEvent>;
  migrationInCancelHookFailedEvents: Array<MigrationInCancelHookFailedEvent>;
  migrationOutHookFailedEvent?: Maybe<MigrationOutHookFailedEvent>;
  migrationOutHookFailedEvents: Array<MigrationOutHookFailedEvent>;
  feeEnabledForFundEvent?: Maybe<FeeEnabledForFundEvent>;
  feeEnabledForFundEvents: Array<FeeEnabledForFundEvent>;
  feesRecipientSetForFundEvent?: Maybe<FeesRecipientSetForFundEvent>;
  feesRecipientSetForFundEvents: Array<FeesRecipientSetForFundEvent>;
  feeSettledForFundEvent?: Maybe<FeeSettledForFundEvent>;
  feeSettledForFundEvents: Array<FeeSettledForFundEvent>;
  allSharesOutstandingForcePaidForFundEvent?: Maybe<AllSharesOutstandingForcePaidForFundEvent>;
  allSharesOutstandingForcePaidForFundEvents: Array<AllSharesOutstandingForcePaidForFundEvent>;
  sharesOutstandingPaidForFundEvent?: Maybe<SharesOutstandingPaidForFundEvent>;
  sharesOutstandingPaidForFundEvents: Array<SharesOutstandingPaidForFundEvent>;
  policyEnabledForFundEvent?: Maybe<PolicyEnabledForFundEvent>;
  policyEnabledForFundEvents: Array<PolicyEnabledForFundEvent>;
  policyDisabledForFundEvent?: Maybe<PolicyDisabledForFundEvent>;
  policyDisabledForFundEvents: Array<PolicyDisabledForFundEvent>;
  accessorSetEvent?: Maybe<AccessorSetEvent>;
  accessorSetEvents: Array<AccessorSetEvent>;
  ownerSetEvent?: Maybe<OwnerSetEvent>;
  ownerSetEvents: Array<OwnerSetEvent>;
  migratorSetEvent?: Maybe<MigratorSetEvent>;
  migratorSetEvents: Array<MigratorSetEvent>;
  vaultLibSetEvent?: Maybe<VaultLibSetEvent>;
  vaultLibSetEvents: Array<VaultLibSetEvent>;
  approvalEvent?: Maybe<ApprovalEvent>;
  approvalEvents: Array<ApprovalEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  adapterBlacklistAddressesAddedEvent?: Maybe<AdapterBlacklistAddressesAddedEvent>;
  adapterBlacklistAddressesAddedEvents: Array<AdapterBlacklistAddressesAddedEvent>;
  adapterBlacklistAddressesRemovedEvent?: Maybe<AdapterBlacklistAddressesRemovedEvent>;
  adapterBlacklistAddressesRemovedEvents: Array<AdapterBlacklistAddressesRemovedEvent>;
  adapterWhitelistAddressesAddedEvent?: Maybe<AdapterWhitelistAddressesAddedEvent>;
  adapterWhitelistAddressesAddedEvents: Array<AdapterWhitelistAddressesAddedEvent>;
  adapterWhitelistAddressesRemovedEvent?: Maybe<AdapterWhitelistAddressesRemovedEvent>;
  adapterWhitelistAddressesRemovedEvents: Array<AdapterWhitelistAddressesRemovedEvent>;
  assetBlacklistAddressesAddedEvent?: Maybe<AssetBlacklistAddressesAddedEvent>;
  assetBlacklistAddressesAddedEvents: Array<AssetBlacklistAddressesAddedEvent>;
  assetBlacklistAddressesRemovedEvent?: Maybe<AssetBlacklistAddressesRemovedEvent>;
  assetBlacklistAddressesRemovedEvents: Array<AssetBlacklistAddressesRemovedEvent>;
  assetWhitelistAddressesAddedEvent?: Maybe<AssetWhitelistAddressesAddedEvent>;
  assetWhitelistAddressesAddedEvents: Array<AssetWhitelistAddressesAddedEvent>;
  assetWhitelistAddressesRemovedEvent?: Maybe<AssetWhitelistAddressesRemovedEvent>;
  assetWhitelistAddressesRemovedEvents: Array<AssetWhitelistAddressesRemovedEvent>;
  buySharesCallerWhitelistAddressesAddedEvent?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent>;
  buySharesCallerWhitelistAddressesAddedEvents: Array<BuySharesCallerWhitelistAddressesAddedEvent>;
  buySharesCallerWhitelistAddressesRemovedEvent?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent>;
  buySharesCallerWhitelistAddressesRemovedEvents: Array<BuySharesCallerWhitelistAddressesRemovedEvent>;
  guaranteedRedemptionFundSettingsSetEvent?: Maybe<GuaranteedRedemptionFundSettingsSetEvent>;
  guaranteedRedemptionFundSettingsSetEvents: Array<GuaranteedRedemptionFundSettingsSetEvent>;
  investorWhitelistAddressesAddedEvent?: Maybe<InvestorWhitelistAddressesAddedEvent>;
  investorWhitelistAddressesAddedEvents: Array<InvestorWhitelistAddressesAddedEvent>;
  investorWhitelistAddressesRemovedEvent?: Maybe<InvestorWhitelistAddressesRemovedEvent>;
  investorWhitelistAddressesRemovedEvents: Array<InvestorWhitelistAddressesRemovedEvent>;
  maxConcentrationSetEvent?: Maybe<MaxConcentrationSetEvent>;
  maxConcentrationSetEvents: Array<MaxConcentrationSetEvent>;
  minMaxInvestmentFundSettingsSetEvent?: Maybe<MinMaxInvestmentFundSettingsSetEvent>;
  minMaxInvestmentFundSettingsSetEvents: Array<MinMaxInvestmentFundSettingsSetEvent>;
  managementFeeSettingsAddedEvent?: Maybe<ManagementFeeSettingsAddedEvent>;
  managementFeeSettingsAddedEvents: Array<ManagementFeeSettingsAddedEvent>;
  managementFeeSettledEvent?: Maybe<ManagementFeeSettledEvent>;
  managementFeeSettledEvents: Array<ManagementFeeSettledEvent>;
  performanceFeeSettingsAddedEvent?: Maybe<PerformanceFeeSettingsAddedEvent>;
  performanceFeeSettingsAddedEvents: Array<PerformanceFeeSettingsAddedEvent>;
  performanceFeeActivatedForFundEvent?: Maybe<PerformanceFeeActivatedForFundEvent>;
  performanceFeeActivatedForFundEvents: Array<PerformanceFeeActivatedForFundEvent>;
  performanceFeeSharePriceUpdatedEvent?: Maybe<PerformanceFeeSharePriceUpdatedEvent>;
  performanceFeeSharePriceUpdatedEvents: Array<PerformanceFeeSharePriceUpdatedEvent>;
  performanceFeePaidOutEvent?: Maybe<PerformanceFeePaidOutEvent>;
  performanceFeePaidOutEvents: Array<PerformanceFeePaidOutEvent>;
  performanceFeePerformanceUpdatedEvent?: Maybe<PerformanceFeePerformanceUpdatedEvent>;
  performanceFeePerformanceUpdatedEvents: Array<PerformanceFeePerformanceUpdatedEvent>;
  entranceRateDirectFeeSettingsAddedEvent?: Maybe<EntranceRateDirectFeeSettingsAddedEvent>;
  entranceRateDirectFeeSettingsAddedEvents: Array<EntranceRateDirectFeeSettingsAddedEvent>;
  entranceRateDirectFeeSettledEvent?: Maybe<EntranceRateDirectFeeSettledEvent>;
  entranceRateDirectFeeSettledEvents: Array<EntranceRateDirectFeeSettledEvent>;
  entranceRateBurnFeeSettingsAddedEvent?: Maybe<EntranceRateBurnFeeSettingsAddedEvent>;
  entranceRateBurnFeeSettingsAddedEvents: Array<EntranceRateBurnFeeSettingsAddedEvent>;
  entranceRateBurnFeeSettledEvent?: Maybe<EntranceRateBurnFeeSettledEvent>;
  entranceRateBurnFeeSettledEvents: Array<EntranceRateBurnFeeSettledEvent>;
  overridePauseSetEvent?: Maybe<OverridePauseSetEvent>;
  overridePauseSetEvents: Array<OverridePauseSetEvent>;
  migratedSharesDuePaidEvent?: Maybe<MigratedSharesDuePaidEvent>;
  migratedSharesDuePaidEvents: Array<MigratedSharesDuePaidEvent>;
  preRedeemSharesHookFailedEvent?: Maybe<PreRedeemSharesHookFailedEvent>;
  preRedeemSharesHookFailedEvents: Array<PreRedeemSharesHookFailedEvent>;
  vaultProxyDeployedEvent?: Maybe<VaultProxyDeployedEvent>;
  vaultProxyDeployedEvents: Array<VaultProxyDeployedEvent>;
  comptrollerLibSetEvent?: Maybe<ComptrollerLibSetEvent>;
  comptrollerLibSetEvents: Array<ComptrollerLibSetEvent>;
  adapterRegisteredEvent?: Maybe<AdapterRegisteredEvent>;
  adapterRegisteredEvents: Array<AdapterRegisteredEvent>;
  adapterDeregisteredEvent?: Maybe<AdapterDeregisteredEvent>;
  adapterDeregisteredEvents: Array<AdapterDeregisteredEvent>;
  trackedAssetsLimitSetEvent?: Maybe<TrackedAssetsLimitSetEvent>;
  trackedAssetsLimitSetEvents: Array<TrackedAssetsLimitSetEvent>;
  policyRegisteredEvent?: Maybe<PolicyRegisteredEvent>;
  policyRegisteredEvents: Array<PolicyRegisteredEvent>;
  policyDeregisteredEvent?: Maybe<PolicyDeregisteredEvent>;
  policyDeregisteredEvents: Array<PolicyDeregisteredEvent>;
  guaranteedRedemptionAdapterAddedEvent?: Maybe<GuaranteedRedemptionAdapterAddedEvent>;
  guaranteedRedemptionAdapterAddedEvents: Array<GuaranteedRedemptionAdapterAddedEvent>;
  guaranteedRedemptionAdapterRemovedEvent?: Maybe<GuaranteedRedemptionAdapterRemovedEvent>;
  guaranteedRedemptionAdapterRemovedEvents: Array<GuaranteedRedemptionAdapterRemovedEvent>;
  guaranteedRedemptionRedemptionWindowBufferSetEvent?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent>;
  guaranteedRedemptionRedemptionWindowBufferSetEvents: Array<GuaranteedRedemptionRedemptionWindowBufferSetEvent>;
  fundDeployerSetEvent?: Maybe<FundDeployerSetEvent>;
  fundDeployerSetEvents: Array<FundDeployerSetEvent>;
  valueInterpreterSetEvent?: Maybe<ValueInterpreterSetEvent>;
  valueInterpreterSetEvents: Array<ValueInterpreterSetEvent>;
  ownershipTransferredEvent?: Maybe<OwnershipTransferredEvent>;
  ownershipTransferredEvents: Array<OwnershipTransferredEvent>;
  derivativeAddedEvent?: Maybe<DerivativeAddedEvent>;
  derivativeAddedEvents: Array<DerivativeAddedEvent>;
  derivativeRemovedEvent?: Maybe<DerivativeRemovedEvent>;
  derivativeRemovedEvents: Array<DerivativeRemovedEvent>;
  derivativeUpdatedEvent?: Maybe<DerivativeUpdatedEvent>;
  derivativeUpdatedEvents: Array<DerivativeUpdatedEvent>;
  aggregatorUpdatedEvent?: Maybe<AggregatorUpdatedEvent>;
  aggregatorUpdatedEvents: Array<AggregatorUpdatedEvent>;
  ethUsdAggregatorSetEvent?: Maybe<EthUsdAggregatorSetEvent>;
  ethUsdAggregatorSetEvents: Array<EthUsdAggregatorSetEvent>;
  primitiveAddedEvent?: Maybe<PrimitiveAddedEvent>;
  primitiveAddedEvents: Array<PrimitiveAddedEvent>;
  primitiveRemovedEvent?: Maybe<PrimitiveRemovedEvent>;
  primitiveRemovedEvents: Array<PrimitiveRemovedEvent>;
  feeRegisteredEvent?: Maybe<FeeRegisteredEvent>;
  feeRegisteredEvents: Array<FeeRegisteredEvent>;
  feeDeregisteredEvent?: Maybe<FeeDeregisteredEvent>;
  feeDeregisteredEvents: Array<FeeDeregisteredEvent>;
  migrationTimelockSetEvent?: Maybe<MigrationTimelockSetEvent>;
  migrationTimelockSetEvents: Array<MigrationTimelockSetEvent>;
  nominatedOwnerRemovedEvent?: Maybe<NominatedOwnerRemovedEvent>;
  nominatedOwnerRemovedEvents: Array<NominatedOwnerRemovedEvent>;
  nominatedOwnerSetEvent?: Maybe<NominatedOwnerSetEvent>;
  nominatedOwnerSetEvents: Array<NominatedOwnerSetEvent>;
  dispatcherOwnershipTransferredEvent?: Maybe<DispatcherOwnershipTransferredEvent>;
  dispatcherOwnershipTransferredEvents: Array<DispatcherOwnershipTransferredEvent>;
  sharesTokenSymbolSetEvent?: Maybe<SharesTokenSymbolSetEvent>;
  sharesTokenSymbolSetEvents: Array<SharesTokenSymbolSetEvent>;
  releaseStatusSetEvent?: Maybe<ReleaseStatusSetEvent>;
  releaseStatusSetEvents: Array<ReleaseStatusSetEvent>;
  vaultCallRegisteredEvent?: Maybe<VaultCallRegisteredEvent>;
  vaultCallRegisteredEvents: Array<VaultCallRegisteredEvent>;
  vaultCallDeregisteredEvent?: Maybe<VaultCallDeregisteredEvent>;
  vaultCallDeregisteredEvents: Array<VaultCallDeregisteredEvent>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  integrationManager?: Maybe<IntegrationManager>;
  integrationManagers: Array<IntegrationManager>;
  policyManager?: Maybe<PolicyManager>;
  policyManagers: Array<PolicyManager>;
  feeManager?: Maybe<FeeManager>;
  feeManagers: Array<FeeManager>;
  guaranteedRedemption?: Maybe<GuaranteedRedemption>;
  guaranteedRedemptions: Array<GuaranteedRedemption>;
  fund?: Maybe<Fund>;
  funds: Array<Fund>;
  hourlyFundState?: Maybe<HourlyFundState>;
  hourlyFundStates: Array<HourlyFundState>;
  dailyFundState?: Maybe<DailyFundState>;
  dailyFundStates: Array<DailyFundState>;
  monthlyFundState?: Maybe<MonthlyFundState>;
  monthlyFundStates: Array<MonthlyFundState>;
  migration?: Maybe<Migration>;
  migrations: Array<Migration>;
  release?: Maybe<Release>;
  releases: Array<Release>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  investment?: Maybe<Investment>;
  investments: Array<Investment>;
  investmentState?: Maybe<InvestmentState>;
  investmentStates: Array<InvestmentState>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  managementFeeSetting?: Maybe<ManagementFeeSetting>;
  managementFeeSettings: Array<ManagementFeeSetting>;
  performanceFeeSetting?: Maybe<PerformanceFeeSetting>;
  performanceFeeSettings: Array<PerformanceFeeSetting>;
  entranceRateDirectFeeSetting?: Maybe<EntranceRateDirectFeeSetting>;
  entranceRateDirectFeeSettings: Array<EntranceRateDirectFeeSetting>;
  entranceRateBurnFeeSetting?: Maybe<EntranceRateBurnFeeSetting>;
  entranceRateBurnFeeSettings: Array<EntranceRateBurnFeeSetting>;
  integrationAdapter?: Maybe<IntegrationAdapter>;
  integrationAdapters: Array<IntegrationAdapter>;
  policy?: Maybe<Policy>;
  policies: Array<Policy>;
  adapterBlacklistSetting?: Maybe<AdapterBlacklistSetting>;
  adapterBlacklistSettings: Array<AdapterBlacklistSetting>;
  adapterWhitelistSetting?: Maybe<AdapterWhitelistSetting>;
  adapterWhitelistSettings: Array<AdapterWhitelistSetting>;
  assetBlacklistSetting?: Maybe<AssetBlacklistSetting>;
  assetBlacklistSettings: Array<AssetBlacklistSetting>;
  assetWhitelistSetting?: Maybe<AssetWhitelistSetting>;
  assetWhitelistSettings: Array<AssetWhitelistSetting>;
  buySharesCallerWhitelistSetting?: Maybe<BuySharesCallerWhitelistSetting>;
  buySharesCallerWhitelistSettings: Array<BuySharesCallerWhitelistSetting>;
  guaranteedRedemptionSetting?: Maybe<GuaranteedRedemptionSetting>;
  guaranteedRedemptionSettings: Array<GuaranteedRedemptionSetting>;
  investorWhitelistSetting?: Maybe<InvestorWhitelistSetting>;
  investorWhitelistSettings: Array<InvestorWhitelistSetting>;
  maxConcentrationSetting?: Maybe<MaxConcentrationSetting>;
  maxConcentrationSettings: Array<MaxConcentrationSetting>;
  minMaxInvestmentSetting?: Maybe<MinMaxInvestmentSetting>;
  minMaxInvestmentSettings: Array<MinMaxInvestmentSetting>;
  unknownPolicySetting?: Maybe<UnknownPolicySetting>;
  unknownPolicySettings: Array<UnknownPolicySetting>;
  shareState?: Maybe<ShareState>;
  shareStates: Array<ShareState>;
  portfolioState?: Maybe<PortfolioState>;
  portfolioStates: Array<PortfolioState>;
  holdingState?: Maybe<HoldingState>;
  holdingStates: Array<HoldingState>;
  calculationState?: Maybe<CalculationState>;
  calculationStates: Array<CalculationState>;
  fundState?: Maybe<FundState>;
  fundStates: Array<FundState>;
  feeState?: Maybe<FeeState>;
  feeStates: Array<FeeState>;
  managementFeeState?: Maybe<ManagementFeeState>;
  managementFeeStates: Array<ManagementFeeState>;
  performanceFeeState?: Maybe<PerformanceFeeState>;
  performanceFeeStates: Array<PerformanceFeeState>;
  entranceRateDirectFeeState?: Maybe<EntranceRateDirectFeeState>;
  entranceRateDirectFeeStates: Array<EntranceRateDirectFeeState>;
  entranceRateBurnFeeState?: Maybe<EntranceRateBurnFeeState>;
  entranceRateBurnFeeStates: Array<EntranceRateBurnFeeState>;
  tokenSwapTrade?: Maybe<TokenSwapTrade>;
  tokenSwapTrades: Array<TokenSwapTrade>;
  multiTokenSwapTrade?: Maybe<MultiTokenSwapTrade>;
  multiTokenSwapTrades: Array<MultiTokenSwapTrade>;
  lendTrade?: Maybe<LendTrade>;
  lendTrades: Array<LendTrade>;
  multiLendTrade?: Maybe<MultiLendTrade>;
  multiLendTrades: Array<MultiLendTrade>;
  redeemTrade?: Maybe<RedeemTrade>;
  redeemTrades: Array<RedeemTrade>;
  multiRedeemTrade?: Maybe<MultiRedeemTrade>;
  multiRedeemTrades: Array<MultiRedeemTrade>;
  addTrackedAssetsTrade?: Maybe<AddTrackedAssetsTrade>;
  addTrackedAssetsTrades: Array<AddTrackedAssetsTrade>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  uniswapV2PoolAssetDetail?: Maybe<UniswapV2PoolAssetDetail>;
  uniswapV2PoolAssetDetails: Array<UniswapV2PoolAssetDetail>;
  compoundAssetDetails: Array<CompoundAssetDetails>;
  assetAmount?: Maybe<AssetAmount>;
  assetAmounts: Array<AssetAmount>;
  assetPrice?: Maybe<AssetPrice>;
  assetPrices: Array<AssetPrice>;
  currencyPrice?: Maybe<CurrencyPrice>;
  currencyPrices: Array<CurrencyPrice>;
  hourlyAssetPriceCandle?: Maybe<HourlyAssetPriceCandle>;
  hourlyAssetPriceCandles: Array<HourlyAssetPriceCandle>;
  dailyAssetPriceCandle?: Maybe<DailyAssetPriceCandle>;
  dailyAssetPriceCandles: Array<DailyAssetPriceCandle>;
  monthlyAssetPriceCandle?: Maybe<MonthlyAssetPriceCandle>;
  monthlyAssetPriceCandles: Array<MonthlyAssetPriceCandle>;
  hourlyCurrencyPriceCandle?: Maybe<HourlyCurrencyPriceCandle>;
  hourlyCurrencyPriceCandles: Array<HourlyCurrencyPriceCandle>;
  dailyCurrencyPriceCandle?: Maybe<DailyCurrencyPriceCandle>;
  dailyCurrencyPriceCandles: Array<DailyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandle?: Maybe<MonthlyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandles: Array<MonthlyCurrencyPriceCandle>;
  hourlyPriceCandleGroup?: Maybe<HourlyPriceCandleGroup>;
  hourlyPriceCandleGroups: Array<HourlyPriceCandleGroup>;
  dailyPriceCandleGroup?: Maybe<DailyPriceCandleGroup>;
  dailyPriceCandleGroups: Array<DailyPriceCandleGroup>;
  monthlyPriceCandleGroup?: Maybe<MonthlyPriceCandleGroup>;
  monthlyPriceCandleGroups: Array<MonthlyPriceCandleGroup>;
  chainlinkAggregatorProxy?: Maybe<ChainlinkAggregatorProxy>;
  chainlinkAggregatorProxies: Array<ChainlinkAggregatorProxy>;
  cron?: Maybe<Cron>;
  crons: Array<Cron>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  networkState?: Maybe<NetworkState>;
  networkStates: Array<NetworkState>;
  networkAssetHolding?: Maybe<NetworkAssetHolding>;
  networkAssetHoldings: Array<NetworkAssetHolding>;
  eventInterface?: Maybe<EventInterface>;
  eventInterfaces: Array<EventInterface>;
  networkEventInterface?: Maybe<NetworkEventInterface>;
  networkEventInterfaces: Array<NetworkEventInterface>;
  fundEventInterface?: Maybe<FundEventInterface>;
  fundEventInterfaces: Array<FundEventInterface>;
  sharesChangeInterface?: Maybe<SharesChangeInterface>;
  sharesChangeInterfaces: Array<SharesChangeInterface>;
  feeSharesChangeInterface?: Maybe<FeeSharesChangeInterface>;
  feeSharesChangeInterfaces: Array<FeeSharesChangeInterface>;
  investmentSharesChangeInterface?: Maybe<InvestmentSharesChangeInterface>;
  investmentSharesChangeInterfaces: Array<InvestmentSharesChangeInterface>;
  fundStateInterface?: Maybe<FundStateInterface>;
  fundStateInterfaces: Array<FundStateInterface>;
  feeSettingInterface?: Maybe<FeeSettingInterface>;
  feeSettingInterfaces: Array<FeeSettingInterface>;
  policySettingInterface?: Maybe<PolicySettingInterface>;
  policySettingInterfaces: Array<PolicySettingInterface>;
  individualFeeStateInterface?: Maybe<IndividualFeeStateInterface>;
  individualFeeStateInterfaces: Array<IndividualFeeStateInterface>;
  periodicFundStateInterface?: Maybe<PeriodicFundStateInterface>;
  periodicFundStateInterfaces: Array<PeriodicFundStateInterface>;
  trade?: Maybe<Trade>;
  trades: Array<Trade>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionNewFundCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNewFundCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NewFundCreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NewFundCreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionComptrollerProxyDeployedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionComptrollerProxyDeployedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ComptrollerProxyDeployedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ComptrollerProxyDeployedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultProxySetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultProxySetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultProxySetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultProxySetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesBoughtEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesBoughtEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesBoughtEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesBoughtEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesRedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesRedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAuthUserAddedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAuthUserAddedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthUserAddedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthUserAddedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAuthUserRemovedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAuthUserRemovedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AuthUserRemovedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AuthUserRemovedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCallOnIntegrationExecutedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCallOnIntegrationExecutedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CallOnIntegrationExecutedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CallOnIntegrationExecutedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationSignaledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationSignaledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationSignaledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationSignaledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationCancelledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationCancelledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationCancelledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationCancelledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationExecutedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationExecutedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationExecutedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationExecutedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationInCancelHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationInCancelHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationInCancelHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationInCancelHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationOutHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationOutHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationOutHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationOutHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeEnabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeEnabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeEnabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeEnabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeesRecipientSetForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeesRecipientSetForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeesRecipientSetForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeesRecipientSetForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSettledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSettledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAllSharesOutstandingForcePaidForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAllSharesOutstandingForcePaidForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AllSharesOutstandingForcePaidForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AllSharesOutstandingForcePaidForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesOutstandingPaidForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesOutstandingPaidForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesOutstandingPaidForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesOutstandingPaidForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyEnabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyEnabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyEnabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyEnabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyDisabledForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyDisabledForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyDisabledForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyDisabledForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccessorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccessorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AccessorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AccessorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOwnerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOwnerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigratorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigratorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigratorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigratorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultLibSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultLibSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultLibSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultLibSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionApprovalEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionApprovalEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransferEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransferEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionFundSettingsSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionFundSettingsSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionFundSettingsSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionFundSettingsSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistAddressesAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistAddressesAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistAddressesAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistAddressesAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistAddressesRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistAddressesRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistAddressesRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistAddressesRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMaxConcentrationSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMaxConcentrationSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MaxConcentrationSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MaxConcentrationSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMinMaxInvestmentFundSettingsSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMinMaxInvestmentFundSettingsSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MinMaxInvestmentFundSettingsSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MinMaxInvestmentFundSettingsSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeActivatedForFundEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeActivatedForFundEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeActivatedForFundEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeActivatedForFundEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSharePriceUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSharePriceUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSharePriceUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSharePriceUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeePaidOutEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeePaidOutEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeePaidOutEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeePaidOutEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeePerformanceUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeePerformanceUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeePerformanceUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeePerformanceUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettingsAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettingsAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSettingsAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSettingsAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSettledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSettledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOverridePauseSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOverridePauseSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OverridePauseSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OverridePauseSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigratedSharesDuePaidEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigratedSharesDuePaidEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigratedSharesDuePaidEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigratedSharesDuePaidEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPreRedeemSharesHookFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPreRedeemSharesHookFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PreRedeemSharesHookFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PreRedeemSharesHookFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultProxyDeployedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultProxyDeployedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultProxyDeployedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultProxyDeployedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionComptrollerLibSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionComptrollerLibSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ComptrollerLibSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ComptrollerLibSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetsLimitSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTrackedAssetsLimitSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TrackedAssetsLimitSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TrackedAssetsLimitSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionAdapterAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionAdapterAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionAdapterAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionAdapterAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionAdapterRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionAdapterRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionAdapterRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionAdapterRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionRedemptionWindowBufferSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionRedemptionWindowBufferSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionRedemptionWindowBufferSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundDeployerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundDeployerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundDeployerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundDeployerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionValueInterpreterSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionValueInterpreterSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ValueInterpreterSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ValueInterpreterSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDerivativeUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DerivativeUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DerivativeUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAggregatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAggregatorUpdatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AggregatorUpdatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AggregatorUpdatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEthUsdAggregatorSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEthUsdAggregatorSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EthUsdAggregatorSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EthUsdAggregatorSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrimitiveAddedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrimitiveAddedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrimitiveAddedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrimitiveAddedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrimitiveRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrimitiveRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrimitiveRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrimitiveRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationTimelockSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationTimelockSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MigrationTimelockSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MigrationTimelockSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNominatedOwnerRemovedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNominatedOwnerRemovedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominatedOwnerRemovedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NominatedOwnerRemovedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNominatedOwnerSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNominatedOwnerSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NominatedOwnerSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NominatedOwnerSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDispatcherOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDispatcherOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DispatcherOwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DispatcherOwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesTokenSymbolSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesTokenSymbolSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesTokenSymbolSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesTokenSymbolSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionReleaseStatusSetEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionReleaseStatusSetEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReleaseStatusSetEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReleaseStatusSetEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultCallRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultCallRegisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultCallRegisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultCallRegisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultCallDeregisteredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVaultCallDeregisteredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultCallDeregisteredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultCallDeregisteredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIntegrationManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIntegrationManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicyManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicyManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeManagerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeManagersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeManager_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeManager_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fund_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fund_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyFundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyFundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMigrationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Migration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Migration_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionReleaseArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionReleasesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Release_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Release_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Fee_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Fee_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIntegrationAdapterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIntegrationAdaptersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IntegrationAdapter_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IntegrationAdapter_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoliciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Policy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Policy_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterBlacklistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterBlacklistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAdapterWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AdapterWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AdapterWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBlacklistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBlacklistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBlacklistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBuySharesCallerWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BuySharesCallerWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BuySharesCallerWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGuaranteedRedemptionSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GuaranteedRedemptionSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GuaranteedRedemptionSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestorWhitelistSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestorWhitelistSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestorWhitelistSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMaxConcentrationSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMaxConcentrationSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MaxConcentrationSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MaxConcentrationSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMinMaxInvestmentSettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMinMaxInvestmentSettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MinMaxInvestmentSetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MinMaxInvestmentSetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnknownPolicySettingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnknownPolicySettingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnknownPolicySetting_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnknownPolicySetting_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionShareStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionShareStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ShareState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ShareState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPortfolioStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPortfolioStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PortfolioState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PortfolioState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHoldingStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHoldingStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HoldingState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HoldingState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCalculationStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCalculationStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CalculationState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CalculationState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionManagementFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ManagementFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ManagementFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPerformanceFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PerformanceFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PerformanceFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateDirectFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateDirectFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateDirectFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEntranceRateBurnFeeStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EntranceRateBurnFeeState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EntranceRateBurnFeeState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenSwapTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenSwapTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenSwapTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenSwapTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiTokenSwapTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiTokenSwapTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiTokenSwapTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiTokenSwapTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLendTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLendTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiLendTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiLendTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiLendTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiLendTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiRedeemTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultiRedeemTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultiRedeemTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultiRedeemTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAddTrackedAssetsTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAddTrackedAssetsTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AddTrackedAssetsTrade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AddTrackedAssetsTrade_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Asset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Asset_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrencyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrenciesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Currency_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Currency_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUniswapV2PoolAssetDetailArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUniswapV2PoolAssetDetailsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapV2PoolAssetDetail_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapV2PoolAssetDetail_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCompoundAssetDetailsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CompoundAssetDetails_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CompoundAssetDetails_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetAmountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetAmountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetAmount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetAmount_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrencyPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCurrencyPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CurrencyPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CurrencyPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyAssetPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyAssetPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyAssetPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyAssetPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyCurrencyPriceCandlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyCurrencyPriceCandle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyCurrencyPriceCandle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourlyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourlyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourlyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDailyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DailyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DailyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMonthlyPriceCandleGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MonthlyPriceCandleGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MonthlyPriceCandleGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionChainlinkAggregatorProxyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionChainlinkAggregatorProxiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChainlinkAggregatorProxy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ChainlinkAggregatorProxy_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCronArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCronsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Cron_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Cron_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Network_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Network_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkStateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkStatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkState_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkState_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkAssetHoldingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkAssetHoldingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkAssetHolding_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkAssetHolding_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionNetworkEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NetworkEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<NetworkEventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundEventInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundEventInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentSharesChangeInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentSharesChangeInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<InvestmentSharesChangeInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<InvestmentSharesChangeInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSettingInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFeeSettingInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeeSettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FeeSettingInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicySettingInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPolicySettingInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PolicySettingInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PolicySettingInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIndividualFeeStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIndividualFeeStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IndividualFeeStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IndividualFeeStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPeriodicFundStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPeriodicFundStateInterfacesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PeriodicFundStateInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PeriodicFundStateInterface_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTradeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Trade_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Trade_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type TokenSwapTrade = Trade & {
  __typename?: 'TokenSwapTrade';
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  incomingAssetAmount: AssetAmount;
  outgoingAssetAmount: AssetAmount;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};

export type TokenSwapTrade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  incomingAssetAmount?: Maybe<Scalars['String']>;
  incomingAssetAmount_not?: Maybe<Scalars['String']>;
  incomingAssetAmount_gt?: Maybe<Scalars['String']>;
  incomingAssetAmount_lt?: Maybe<Scalars['String']>;
  incomingAssetAmount_gte?: Maybe<Scalars['String']>;
  incomingAssetAmount_lte?: Maybe<Scalars['String']>;
  incomingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  incomingAssetAmount_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  incomingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  incomingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lt?: Maybe<Scalars['String']>;
  outgoingAssetAmount_gte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_lte?: Maybe<Scalars['String']>;
  outgoingAssetAmount_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_not_in?: Maybe<Array<Scalars['String']>>;
  outgoingAssetAmount_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_contains?: Maybe<Scalars['String']>;
  outgoingAssetAmount_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_starts_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_ends_with?: Maybe<Scalars['String']>;
  outgoingAssetAmount_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TokenSwapTrade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  IncomingAssetAmount = 'incomingAssetAmount',
  OutgoingAssetAmount = 'outgoingAssetAmount',
  Price = 'price',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type TrackedAssetAddedEvent = EventInterface & FundEventInterface & {
  __typename?: 'TrackedAssetAddedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  asset: Asset;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type TrackedAssetAddedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TrackedAssetAddedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Asset = 'asset',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TrackedAssetRemovedEvent = EventInterface & FundEventInterface & {
  __typename?: 'TrackedAssetRemovedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  asset: Asset;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type TrackedAssetRemovedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TrackedAssetRemovedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Asset = 'asset',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TrackedAssetsLimitSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'TrackedAssetsLimitSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  nextTrackedAssetsLimit: Scalars['BigInt'];
  transaction: Transaction;
};

export type TrackedAssetsLimitSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  nextTrackedAssetsLimit?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_not?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_gt?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_lt?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_gte?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_lte?: Maybe<Scalars['BigInt']>;
  nextTrackedAssetsLimit_in?: Maybe<Array<Scalars['BigInt']>>;
  nextTrackedAssetsLimit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TrackedAssetsLimitSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  NextTrackedAssetsLimit = 'nextTrackedAssetsLimit',
  Transaction = 'transaction'
}

export type Trade = {
  id: Scalars['ID'];
  fund: Fund;
  adapter: IntegrationAdapter;
  method: IntegrationMethod;
  timestamp: Scalars['BigInt'];
  fundState: FundState;
};

export type Trade_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  adapter?: Maybe<Scalars['String']>;
  adapter_not?: Maybe<Scalars['String']>;
  adapter_gt?: Maybe<Scalars['String']>;
  adapter_lt?: Maybe<Scalars['String']>;
  adapter_gte?: Maybe<Scalars['String']>;
  adapter_lte?: Maybe<Scalars['String']>;
  adapter_in?: Maybe<Array<Scalars['String']>>;
  adapter_not_in?: Maybe<Array<Scalars['String']>>;
  adapter_contains?: Maybe<Scalars['String']>;
  adapter_not_contains?: Maybe<Scalars['String']>;
  adapter_starts_with?: Maybe<Scalars['String']>;
  adapter_not_starts_with?: Maybe<Scalars['String']>;
  adapter_ends_with?: Maybe<Scalars['String']>;
  adapter_not_ends_with?: Maybe<Scalars['String']>;
  method?: Maybe<IntegrationMethod>;
  method_not?: Maybe<IntegrationMethod>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fundState?: Maybe<Scalars['String']>;
  fundState_not?: Maybe<Scalars['String']>;
  fundState_gt?: Maybe<Scalars['String']>;
  fundState_lt?: Maybe<Scalars['String']>;
  fundState_gte?: Maybe<Scalars['String']>;
  fundState_lte?: Maybe<Scalars['String']>;
  fundState_in?: Maybe<Array<Scalars['String']>>;
  fundState_not_in?: Maybe<Array<Scalars['String']>>;
  fundState_contains?: Maybe<Scalars['String']>;
  fundState_not_contains?: Maybe<Scalars['String']>;
  fundState_starts_with?: Maybe<Scalars['String']>;
  fundState_not_starts_with?: Maybe<Scalars['String']>;
  fundState_ends_with?: Maybe<Scalars['String']>;
  fundState_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Trade_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Adapter = 'adapter',
  Method = 'method',
  Timestamp = 'timestamp',
  FundState = 'fundState'
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  from: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  value: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  gasUsed: Scalars['Int'];
  gasPrice: Scalars['BigDecimal'];
  input: Scalars['String'];
  account?: Maybe<Account>;
  events: Array<EventInterface>;
};


export type TransactionEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventInterface_Filter>;
};

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigDecimal']>;
  value_not?: Maybe<Scalars['BigDecimal']>;
  value_gt?: Maybe<Scalars['BigDecimal']>;
  value_lt?: Maybe<Scalars['BigDecimal']>;
  value_gte?: Maybe<Scalars['BigDecimal']>;
  value_lte?: Maybe<Scalars['BigDecimal']>;
  value_in?: Maybe<Array<Scalars['BigDecimal']>>;
  value_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gasUsed?: Maybe<Scalars['Int']>;
  gasUsed_not?: Maybe<Scalars['Int']>;
  gasUsed_gt?: Maybe<Scalars['Int']>;
  gasUsed_lt?: Maybe<Scalars['Int']>;
  gasUsed_gte?: Maybe<Scalars['Int']>;
  gasUsed_lte?: Maybe<Scalars['Int']>;
  gasUsed_in?: Maybe<Array<Scalars['Int']>>;
  gasUsed_not_in?: Maybe<Array<Scalars['Int']>>;
  gasPrice?: Maybe<Scalars['BigDecimal']>;
  gasPrice_not?: Maybe<Scalars['BigDecimal']>;
  gasPrice_gt?: Maybe<Scalars['BigDecimal']>;
  gasPrice_lt?: Maybe<Scalars['BigDecimal']>;
  gasPrice_gte?: Maybe<Scalars['BigDecimal']>;
  gasPrice_lte?: Maybe<Scalars['BigDecimal']>;
  gasPrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gasPrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  input?: Maybe<Scalars['String']>;
  input_not?: Maybe<Scalars['String']>;
  input_gt?: Maybe<Scalars['String']>;
  input_lt?: Maybe<Scalars['String']>;
  input_gte?: Maybe<Scalars['String']>;
  input_lte?: Maybe<Scalars['String']>;
  input_in?: Maybe<Array<Scalars['String']>>;
  input_not_in?: Maybe<Array<Scalars['String']>>;
  input_contains?: Maybe<Scalars['String']>;
  input_not_contains?: Maybe<Scalars['String']>;
  input_starts_with?: Maybe<Scalars['String']>;
  input_not_starts_with?: Maybe<Scalars['String']>;
  input_ends_with?: Maybe<Scalars['String']>;
  input_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  From = 'from',
  To = 'to',
  Value = 'value',
  Timestamp = 'timestamp',
  Block = 'block',
  GasUsed = 'gasUsed',
  GasPrice = 'gasPrice',
  Input = 'input',
  Account = 'account',
  Events = 'events'
}

export type TransferEvent = EventInterface & FundEventInterface & {
  __typename?: 'TransferEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  from: Scalars['String'];
  to: Scalars['String'];
  amount: Scalars['BigDecimal'];
};

export type TransferEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum TransferEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  From = 'from',
  To = 'to',
  Amount = 'amount'
}

export type UniswapV2PoolAssetDetail = {
  __typename?: 'UniswapV2PoolAssetDetail';
  id: Scalars['ID'];
  token0: Asset;
  token1: Asset;
};

export type UniswapV2PoolAssetDetail_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  token0?: Maybe<Scalars['String']>;
  token0_not?: Maybe<Scalars['String']>;
  token0_gt?: Maybe<Scalars['String']>;
  token0_lt?: Maybe<Scalars['String']>;
  token0_gte?: Maybe<Scalars['String']>;
  token0_lte?: Maybe<Scalars['String']>;
  token0_in?: Maybe<Array<Scalars['String']>>;
  token0_not_in?: Maybe<Array<Scalars['String']>>;
  token0_contains?: Maybe<Scalars['String']>;
  token0_not_contains?: Maybe<Scalars['String']>;
  token0_starts_with?: Maybe<Scalars['String']>;
  token0_not_starts_with?: Maybe<Scalars['String']>;
  token0_ends_with?: Maybe<Scalars['String']>;
  token0_not_ends_with?: Maybe<Scalars['String']>;
  token1?: Maybe<Scalars['String']>;
  token1_not?: Maybe<Scalars['String']>;
  token1_gt?: Maybe<Scalars['String']>;
  token1_lt?: Maybe<Scalars['String']>;
  token1_gte?: Maybe<Scalars['String']>;
  token1_lte?: Maybe<Scalars['String']>;
  token1_in?: Maybe<Array<Scalars['String']>>;
  token1_not_in?: Maybe<Array<Scalars['String']>>;
  token1_contains?: Maybe<Scalars['String']>;
  token1_not_contains?: Maybe<Scalars['String']>;
  token1_starts_with?: Maybe<Scalars['String']>;
  token1_not_starts_with?: Maybe<Scalars['String']>;
  token1_ends_with?: Maybe<Scalars['String']>;
  token1_not_ends_with?: Maybe<Scalars['String']>;
};

export enum UniswapV2PoolAssetDetail_OrderBy {
  Id = 'id',
  Token0 = 'token0',
  Token1 = 'token1'
}

export type UnknownPolicySetting = PolicySettingInterface & {
  __typename?: 'UnknownPolicySetting';
  id: Scalars['ID'];
  policy: Policy;
  fund: Fund;
  timestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  events: Array<FundEventInterface>;
};


export type UnknownPolicySettingEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundEventInterface_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundEventInterface_Filter>;
};

export type UnknownPolicySetting_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  policy?: Maybe<Scalars['String']>;
  policy_not?: Maybe<Scalars['String']>;
  policy_gt?: Maybe<Scalars['String']>;
  policy_lt?: Maybe<Scalars['String']>;
  policy_gte?: Maybe<Scalars['String']>;
  policy_lte?: Maybe<Scalars['String']>;
  policy_in?: Maybe<Array<Scalars['String']>>;
  policy_not_in?: Maybe<Array<Scalars['String']>>;
  policy_contains?: Maybe<Scalars['String']>;
  policy_not_contains?: Maybe<Scalars['String']>;
  policy_starts_with?: Maybe<Scalars['String']>;
  policy_not_starts_with?: Maybe<Scalars['String']>;
  policy_ends_with?: Maybe<Scalars['String']>;
  policy_not_ends_with?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabled_not?: Maybe<Scalars['Boolean']>;
  enabled_in?: Maybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  events?: Maybe<Array<Scalars['String']>>;
  events_not?: Maybe<Array<Scalars['String']>>;
  events_contains?: Maybe<Array<Scalars['String']>>;
  events_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum UnknownPolicySetting_OrderBy {
  Id = 'id',
  Policy = 'policy',
  Fund = 'fund',
  Timestamp = 'timestamp',
  Enabled = 'enabled',
  Events = 'events'
}

export type ValueInterpreterSetEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'ValueInterpreterSetEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevValueInterpreter?: Maybe<Scalars['String']>;
  nextValueInterpreter: Scalars['String'];
};

export type ValueInterpreterSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevValueInterpreter?: Maybe<Scalars['String']>;
  prevValueInterpreter_not?: Maybe<Scalars['String']>;
  prevValueInterpreter_gt?: Maybe<Scalars['String']>;
  prevValueInterpreter_lt?: Maybe<Scalars['String']>;
  prevValueInterpreter_gte?: Maybe<Scalars['String']>;
  prevValueInterpreter_lte?: Maybe<Scalars['String']>;
  prevValueInterpreter_in?: Maybe<Array<Scalars['String']>>;
  prevValueInterpreter_not_in?: Maybe<Array<Scalars['String']>>;
  prevValueInterpreter_contains?: Maybe<Scalars['String']>;
  prevValueInterpreter_not_contains?: Maybe<Scalars['String']>;
  prevValueInterpreter_starts_with?: Maybe<Scalars['String']>;
  prevValueInterpreter_not_starts_with?: Maybe<Scalars['String']>;
  prevValueInterpreter_ends_with?: Maybe<Scalars['String']>;
  prevValueInterpreter_not_ends_with?: Maybe<Scalars['String']>;
  nextValueInterpreter?: Maybe<Scalars['String']>;
  nextValueInterpreter_not?: Maybe<Scalars['String']>;
  nextValueInterpreter_gt?: Maybe<Scalars['String']>;
  nextValueInterpreter_lt?: Maybe<Scalars['String']>;
  nextValueInterpreter_gte?: Maybe<Scalars['String']>;
  nextValueInterpreter_lte?: Maybe<Scalars['String']>;
  nextValueInterpreter_in?: Maybe<Array<Scalars['String']>>;
  nextValueInterpreter_not_in?: Maybe<Array<Scalars['String']>>;
  nextValueInterpreter_contains?: Maybe<Scalars['String']>;
  nextValueInterpreter_not_contains?: Maybe<Scalars['String']>;
  nextValueInterpreter_starts_with?: Maybe<Scalars['String']>;
  nextValueInterpreter_not_starts_with?: Maybe<Scalars['String']>;
  nextValueInterpreter_ends_with?: Maybe<Scalars['String']>;
  nextValueInterpreter_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ValueInterpreterSetEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevValueInterpreter = 'prevValueInterpreter',
  NextValueInterpreter = 'nextValueInterpreter'
}

export type VaultCallDeregisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'VaultCallDeregisteredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  contractAddress: Scalars['String'];
  selector: Scalars['String'];
};

export type VaultCallDeregisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  contractAddress?: Maybe<Scalars['String']>;
  contractAddress_not?: Maybe<Scalars['String']>;
  contractAddress_gt?: Maybe<Scalars['String']>;
  contractAddress_lt?: Maybe<Scalars['String']>;
  contractAddress_gte?: Maybe<Scalars['String']>;
  contractAddress_lte?: Maybe<Scalars['String']>;
  contractAddress_in?: Maybe<Array<Scalars['String']>>;
  contractAddress_not_in?: Maybe<Array<Scalars['String']>>;
  contractAddress_contains?: Maybe<Scalars['String']>;
  contractAddress_not_contains?: Maybe<Scalars['String']>;
  contractAddress_starts_with?: Maybe<Scalars['String']>;
  contractAddress_not_starts_with?: Maybe<Scalars['String']>;
  contractAddress_ends_with?: Maybe<Scalars['String']>;
  contractAddress_not_ends_with?: Maybe<Scalars['String']>;
  selector?: Maybe<Scalars['String']>;
  selector_not?: Maybe<Scalars['String']>;
  selector_gt?: Maybe<Scalars['String']>;
  selector_lt?: Maybe<Scalars['String']>;
  selector_gte?: Maybe<Scalars['String']>;
  selector_lte?: Maybe<Scalars['String']>;
  selector_in?: Maybe<Array<Scalars['String']>>;
  selector_not_in?: Maybe<Array<Scalars['String']>>;
  selector_contains?: Maybe<Scalars['String']>;
  selector_not_contains?: Maybe<Scalars['String']>;
  selector_starts_with?: Maybe<Scalars['String']>;
  selector_not_starts_with?: Maybe<Scalars['String']>;
  selector_ends_with?: Maybe<Scalars['String']>;
  selector_not_ends_with?: Maybe<Scalars['String']>;
};

export enum VaultCallDeregisteredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ContractAddress = 'contractAddress',
  Selector = 'selector'
}

export type VaultCallRegisteredEvent = EventInterface & NetworkEventInterface & {
  __typename?: 'VaultCallRegisteredEvent';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  contractAddress: Scalars['String'];
  selector: Scalars['String'];
};

export type VaultCallRegisteredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  contractAddress?: Maybe<Scalars['String']>;
  contractAddress_not?: Maybe<Scalars['String']>;
  contractAddress_gt?: Maybe<Scalars['String']>;
  contractAddress_lt?: Maybe<Scalars['String']>;
  contractAddress_gte?: Maybe<Scalars['String']>;
  contractAddress_lte?: Maybe<Scalars['String']>;
  contractAddress_in?: Maybe<Array<Scalars['String']>>;
  contractAddress_not_in?: Maybe<Array<Scalars['String']>>;
  contractAddress_contains?: Maybe<Scalars['String']>;
  contractAddress_not_contains?: Maybe<Scalars['String']>;
  contractAddress_starts_with?: Maybe<Scalars['String']>;
  contractAddress_not_starts_with?: Maybe<Scalars['String']>;
  contractAddress_ends_with?: Maybe<Scalars['String']>;
  contractAddress_not_ends_with?: Maybe<Scalars['String']>;
  selector?: Maybe<Scalars['String']>;
  selector_not?: Maybe<Scalars['String']>;
  selector_gt?: Maybe<Scalars['String']>;
  selector_lt?: Maybe<Scalars['String']>;
  selector_gte?: Maybe<Scalars['String']>;
  selector_lte?: Maybe<Scalars['String']>;
  selector_in?: Maybe<Array<Scalars['String']>>;
  selector_not_in?: Maybe<Array<Scalars['String']>>;
  selector_contains?: Maybe<Scalars['String']>;
  selector_not_contains?: Maybe<Scalars['String']>;
  selector_starts_with?: Maybe<Scalars['String']>;
  selector_not_starts_with?: Maybe<Scalars['String']>;
  selector_ends_with?: Maybe<Scalars['String']>;
  selector_not_ends_with?: Maybe<Scalars['String']>;
};

export enum VaultCallRegisteredEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  ContractAddress = 'contractAddress',
  Selector = 'selector'
}

export type VaultLibSetEvent = EventInterface & FundEventInterface & {
  __typename?: 'VaultLibSetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  prevVaultLib?: Maybe<Scalars['String']>;
  nextVaultLib: Scalars['String'];
};

export type VaultLibSetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  prevVaultLib?: Maybe<Scalars['String']>;
  prevVaultLib_not?: Maybe<Scalars['String']>;
  prevVaultLib_gt?: Maybe<Scalars['String']>;
  prevVaultLib_lt?: Maybe<Scalars['String']>;
  prevVaultLib_gte?: Maybe<Scalars['String']>;
  prevVaultLib_lte?: Maybe<Scalars['String']>;
  prevVaultLib_in?: Maybe<Array<Scalars['String']>>;
  prevVaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  prevVaultLib_contains?: Maybe<Scalars['String']>;
  prevVaultLib_not_contains?: Maybe<Scalars['String']>;
  prevVaultLib_starts_with?: Maybe<Scalars['String']>;
  prevVaultLib_not_starts_with?: Maybe<Scalars['String']>;
  prevVaultLib_ends_with?: Maybe<Scalars['String']>;
  prevVaultLib_not_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib?: Maybe<Scalars['String']>;
  nextVaultLib_not?: Maybe<Scalars['String']>;
  nextVaultLib_gt?: Maybe<Scalars['String']>;
  nextVaultLib_lt?: Maybe<Scalars['String']>;
  nextVaultLib_gte?: Maybe<Scalars['String']>;
  nextVaultLib_lte?: Maybe<Scalars['String']>;
  nextVaultLib_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  nextVaultLib_contains?: Maybe<Scalars['String']>;
  nextVaultLib_not_contains?: Maybe<Scalars['String']>;
  nextVaultLib_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_starts_with?: Maybe<Scalars['String']>;
  nextVaultLib_ends_with?: Maybe<Scalars['String']>;
  nextVaultLib_not_ends_with?: Maybe<Scalars['String']>;
};

export enum VaultLibSetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  PrevVaultLib = 'prevVaultLib',
  NextVaultLib = 'nextVaultLib'
}

export type VaultProxyDeployedEvent = EventInterface & FundEventInterface & NetworkEventInterface & {
  __typename?: 'VaultProxyDeployedEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  fundDeployer: Scalars['String'];
  owner: Account;
  vaultLib: Scalars['String'];
  accessor: Scalars['String'];
  fundName: Scalars['String'];
};

export type VaultProxyDeployedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  fundDeployer?: Maybe<Scalars['String']>;
  fundDeployer_not?: Maybe<Scalars['String']>;
  fundDeployer_gt?: Maybe<Scalars['String']>;
  fundDeployer_lt?: Maybe<Scalars['String']>;
  fundDeployer_gte?: Maybe<Scalars['String']>;
  fundDeployer_lte?: Maybe<Scalars['String']>;
  fundDeployer_in?: Maybe<Array<Scalars['String']>>;
  fundDeployer_not_in?: Maybe<Array<Scalars['String']>>;
  fundDeployer_contains?: Maybe<Scalars['String']>;
  fundDeployer_not_contains?: Maybe<Scalars['String']>;
  fundDeployer_starts_with?: Maybe<Scalars['String']>;
  fundDeployer_not_starts_with?: Maybe<Scalars['String']>;
  fundDeployer_ends_with?: Maybe<Scalars['String']>;
  fundDeployer_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  vaultLib?: Maybe<Scalars['String']>;
  vaultLib_not?: Maybe<Scalars['String']>;
  vaultLib_gt?: Maybe<Scalars['String']>;
  vaultLib_lt?: Maybe<Scalars['String']>;
  vaultLib_gte?: Maybe<Scalars['String']>;
  vaultLib_lte?: Maybe<Scalars['String']>;
  vaultLib_in?: Maybe<Array<Scalars['String']>>;
  vaultLib_not_in?: Maybe<Array<Scalars['String']>>;
  vaultLib_contains?: Maybe<Scalars['String']>;
  vaultLib_not_contains?: Maybe<Scalars['String']>;
  vaultLib_starts_with?: Maybe<Scalars['String']>;
  vaultLib_not_starts_with?: Maybe<Scalars['String']>;
  vaultLib_ends_with?: Maybe<Scalars['String']>;
  vaultLib_not_ends_with?: Maybe<Scalars['String']>;
  accessor?: Maybe<Scalars['String']>;
  accessor_not?: Maybe<Scalars['String']>;
  accessor_gt?: Maybe<Scalars['String']>;
  accessor_lt?: Maybe<Scalars['String']>;
  accessor_gte?: Maybe<Scalars['String']>;
  accessor_lte?: Maybe<Scalars['String']>;
  accessor_in?: Maybe<Array<Scalars['String']>>;
  accessor_not_in?: Maybe<Array<Scalars['String']>>;
  accessor_contains?: Maybe<Scalars['String']>;
  accessor_not_contains?: Maybe<Scalars['String']>;
  accessor_starts_with?: Maybe<Scalars['String']>;
  accessor_not_starts_with?: Maybe<Scalars['String']>;
  accessor_ends_with?: Maybe<Scalars['String']>;
  accessor_not_ends_with?: Maybe<Scalars['String']>;
  fundName?: Maybe<Scalars['String']>;
  fundName_not?: Maybe<Scalars['String']>;
  fundName_gt?: Maybe<Scalars['String']>;
  fundName_lt?: Maybe<Scalars['String']>;
  fundName_gte?: Maybe<Scalars['String']>;
  fundName_lte?: Maybe<Scalars['String']>;
  fundName_in?: Maybe<Array<Scalars['String']>>;
  fundName_not_in?: Maybe<Array<Scalars['String']>>;
  fundName_contains?: Maybe<Scalars['String']>;
  fundName_not_contains?: Maybe<Scalars['String']>;
  fundName_starts_with?: Maybe<Scalars['String']>;
  fundName_not_starts_with?: Maybe<Scalars['String']>;
  fundName_ends_with?: Maybe<Scalars['String']>;
  fundName_not_ends_with?: Maybe<Scalars['String']>;
};

export enum VaultProxyDeployedEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  FundDeployer = 'fundDeployer',
  Owner = 'owner',
  VaultLib = 'vaultLib',
  Accessor = 'accessor',
  FundName = 'fundName'
}

export type VaultProxySetEvent = EventInterface & FundEventInterface & {
  __typename?: 'VaultProxySetEvent';
  id: Scalars['ID'];
  fund: Fund;
  account: Account;
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
  vaultProxy: Scalars['String'];
};

export type VaultProxySetEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fund?: Maybe<Scalars['String']>;
  fund_not?: Maybe<Scalars['String']>;
  fund_gt?: Maybe<Scalars['String']>;
  fund_lt?: Maybe<Scalars['String']>;
  fund_gte?: Maybe<Scalars['String']>;
  fund_lte?: Maybe<Scalars['String']>;
  fund_in?: Maybe<Array<Scalars['String']>>;
  fund_not_in?: Maybe<Array<Scalars['String']>>;
  fund_contains?: Maybe<Scalars['String']>;
  fund_not_contains?: Maybe<Scalars['String']>;
  fund_starts_with?: Maybe<Scalars['String']>;
  fund_not_starts_with?: Maybe<Scalars['String']>;
  fund_ends_with?: Maybe<Scalars['String']>;
  fund_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  vaultProxy?: Maybe<Scalars['String']>;
  vaultProxy_not?: Maybe<Scalars['String']>;
  vaultProxy_gt?: Maybe<Scalars['String']>;
  vaultProxy_lt?: Maybe<Scalars['String']>;
  vaultProxy_gte?: Maybe<Scalars['String']>;
  vaultProxy_lte?: Maybe<Scalars['String']>;
  vaultProxy_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_not_in?: Maybe<Array<Scalars['String']>>;
  vaultProxy_contains?: Maybe<Scalars['String']>;
  vaultProxy_not_contains?: Maybe<Scalars['String']>;
  vaultProxy_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_not_starts_with?: Maybe<Scalars['String']>;
  vaultProxy_ends_with?: Maybe<Scalars['String']>;
  vaultProxy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum VaultProxySetEvent_OrderBy {
  Id = 'id',
  Fund = 'fund',
  Account = 'account',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  VaultProxy = 'vaultProxy'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AssetsQuery = (
  { __typename?: 'Query' }
  & { assets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'name' | 'symbol' | 'decimals' | 'removed' | 'type' | 'derivativeType'>
    & { price?: Maybe<(
      { __typename?: 'AssetPrice' }
      & Pick<AssetPrice, 'price' | 'timestamp'>
    )>, compoundAssetDetail?: Maybe<(
      { __typename?: 'CompoundAssetDetails' }
      & { underlying?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'symbol' | 'name' | 'decimals'>
      )> }
    )>, uniswapV2PoolAssetDetail?: Maybe<(
      { __typename?: 'UniswapV2PoolAssetDetail' }
      & { token0: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'symbol' | 'decimals'>
      ), token1: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'symbol' | 'decimals'>
      ) }
    )> }
  )> }
);


export const AssetsDocument = gql`
    query assets {
  assets(first: 1000, orderBy: symbol, orderDirection: asc) {
    id
    name
    symbol
    decimals
    removed
    type
    derivativeType
    price {
      price
      timestamp
    }
    compoundAssetDetail {
      underlying {
        id
        symbol
        name
        decimals
      }
    }
    uniswapV2PoolAssetDetail {
      token0 {
        id
        symbol
        decimals
      }
      token1 {
        id
        symbol
        decimals
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    assets(variables?: AssetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssetsQuery> {
      return withWrapper(() => client.request<AssetsQuery>(print(AssetsDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;