/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Aggregated = {
  __typename?: 'Aggregated';
  field: Scalars['String'];
  value: Scalars['Float'];
};

export type AggregationFunction = {
  __typename?: 'AggregationFunction';
  _raw?: Maybe<Scalars['Json']>;
  avg?: Maybe<Aggregated>;
  close?: Maybe<Aggregated>;
  count?: Maybe<Aggregated>;
  max?: Maybe<Aggregated>;
  median?: Maybe<Aggregated>;
  min?: Maybe<Aggregated>;
  open?: Maybe<Aggregated>;
  sd?: Maybe<Aggregated>;
  sum?: Maybe<Aggregated>;
};


export type AggregationFunctionAvgArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionCloseArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionCountArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionMaxArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionMedianArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionMinArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionOpenArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionSdArgs = {
  field?: InputMaybe<Scalars['String']>;
};


export type AggregationFunctionSumArgs = {
  field?: InputMaybe<Scalars['String']>;
};

/** Devices that manage at an Apiary level. */
export type ApiaryDevice = {
  __typename?: 'ApiaryDevice';
  _aggregation?: Maybe<AggregationFunction>;
  date_created?: Maybe<Scalars['DateTime']>;
  device_id?: Maybe<Scalars['ID']>;
  hives?: Maybe<Array<Maybe<HiveDevice>>>;
  location?: Maybe<Location>;
  stage?: Maybe<Stage>;
  /** State of a device at specific time. Mostly meta information about the current software level configuration. */
  state?: Maybe<DeviceState>;
  status?: Maybe<DeviceStatus>;
  type?: Maybe<DeviceType>;
  version?: Maybe<Scalars['String']>;
};

/** Authentication of the user from Firebase */
export type Auth = {
  __typename?: 'Auth';
  customer?: Maybe<Customer>;
  devices?: Maybe<Array<Maybe<DeviceResult>>>;
  disabled?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<AuthMetadata>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};


/** Authentication of the user from Firebase */
export type AuthDevicesArgs = {
  _groupBy?: InputMaybe<Array<Scalars['String']>>;
  include?: InputMaybe<Array<DeviceType>>;
};

export type AuthMetadata = {
  __typename?: 'AuthMetadata';
  created_from_now?: Maybe<Scalars['String']>;
  creationTime?: Maybe<Scalars['String']>;
  lastRefreshTime?: Maybe<Scalars['String']>;
  lastSignInTime?: Maybe<Scalars['String']>;
  sign_in_from_now?: Maybe<Scalars['String']>;
};

export enum BinTimeEnum {
  All = 'ALL',
  Day = 'DAY',
  Hour = 'HOUR',
  Hour6 = 'HOUR6',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** Devices that manage at an Comb level. */
export type CombDevice = {
  __typename?: 'CombDevice';
  _aggregation?: Maybe<AggregationFunction>;
  comb_id?: Maybe<Scalars['ID']>;
  hive?: Maybe<HiveDevice>;
  stage?: Maybe<Stage>;
  status?: Maybe<CombStatus>;
  treatments?: Maybe<Array<Maybe<Treatment>>>;
  type?: Maybe<DeviceType>;
};


/** Devices that manage at an Comb level. */
export type CombDeviceTreatmentsArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};

export type CombSlot = {
  __typename?: 'CombSlot';
  _history?: Maybe<Array<Maybe<CombSlot>>>;
  comb?: Maybe<CombDevice>;
  device_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  status?: Maybe<CombStatus>;
  timestamp?: Maybe<Scalars['DateTime']>;
  ts_last?: Maybe<Scalars['DateTime']>;
  ts_next?: Maybe<Scalars['DateTime']>;
};


export type CombSlot_HistoryArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};

export enum CombStatus {
  HeatLock = 'HEAT_LOCK',
  MeasFail = 'MEAS_FAIL',
  NoComb = 'NO_COMB',
  NoId = 'NO_ID',
  NoWire = 'NO_WIRE',
  Ok = 'OK',
  OutRange = 'OUT_RANGE',
  Short = 'SHORT',
  Unknown = 'UNKNOWN'
}

/** This table represents the owners of devices at a specific time. If a device owner changes, a new row and timestamp is added. */
export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String'];
  auth?: Maybe<Auth>;
  company?: Maybe<Scalars['String']>;
  customer_id: Scalars['ID'];
  devices?: Maybe<Array<Maybe<DeviceResult>>>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  img_url?: Maybe<Scalars['String']>;
  language: Language;
  last_name: Scalars['String'];
  phone: Scalars['String'];
  treatments?: Maybe<Array<Maybe<Treatment>>>;
};


/** This table represents the owners of devices at a specific time. If a device owner changes, a new row and timestamp is added. */
export type CustomerDevicesArgs = {
  _groupBy?: InputMaybe<Array<Scalars['String']>>;
  include?: InputMaybe<Array<DeviceType>>;
};


/** This table represents the owners of devices at a specific time. If a device owner changes, a new row and timestamp is added. */
export type CustomerTreatmentsArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};

/** Events that happen to a device including optional meta data around the event. */
export type DeviceEvent = {
  __typename?: 'DeviceEvent';
  _aggregation?: Maybe<AggregationFunction>;
  _bin?: Maybe<Array<Maybe<DeviceEvent>>>;
  comb_id?: Maybe<Scalars['String']>;
  comb_position?: Maybe<Scalars['Int']>;
  device?: Maybe<DeviceResult>;
  device_id?: Maybe<Scalars['String']>;
  from_now?: Maybe<Scalars['String']>;
  gateway: Gateway;
  gateway_offset?: Maybe<Scalars['BigInt']>;
  gateway_timestamp: Scalars['DateTime'];
  id: Scalars['ID'];
  meta?: Maybe<Scalars['Json']>;
  server_offset?: Maybe<Scalars['BigInt']>;
  server_timestamp: Scalars['DateTime'];
  timestamp: Scalars['DateTime'];
  type: DeviceEventType;
};

export enum DeviceEventType {
  Bootup = 'BOOTUP',
  BroodResult = 'BROOD_RESULT',
  BroodStart = 'BROOD_START',
  Heartbeat = 'HEARTBEAT',
  PlineBusy = 'PLINE_BUSY',
  ReqReboot = 'REQ_REBOOT',
  ReqTest = 'REQ_TEST',
  SlotChange = 'SLOT_CHANGE',
  StartIotSync = 'START_IOT_SYNC',
  TreatEnd = 'TREAT_END',
  TreatStart = 'TREAT_START'
}

export enum DeviceFieldEnum {
  CustomerId = 'customer_id',
  DeviceId = 'device_id',
  Stage = 'stage',
  Timestamp = 'timestamp',
  Type = 'type',
  Version = 'version'
}

export type DeviceResult = ApiaryDevice | CombDevice | Error | HiveDevice;

/** State of a device at specific time. Mostly meta information about the current software level configuration. */
export type DeviceState = {
  __typename?: 'DeviceState';
  _history?: Maybe<Array<Maybe<DeviceState>>>;
  bluetooth_id?: Maybe<Scalars['String']>;
  bootloader_id?: Maybe<Scalars['String']>;
  device_id?: Maybe<Scalars['String']>;
  firmware_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_sync?: Maybe<Scalars['String']>;
  sim_id?: Maybe<Scalars['String']>;
  status: DeviceStatus;
  timestamp: Scalars['DateTime'];
};


/** State of a device at specific time. Mostly meta information about the current software level configuration. */
export type DeviceState_HistoryArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};

export enum DeviceStatus {
  Ok = 'OK',
  Overload = 'OVERLOAD',
  Short = 'SHORT',
  Unknown = 'UNKNOWN'
}

export enum DeviceType {
  Apibrain = 'APIBRAIN',
  Comb = 'COMB',
  HiveConnect = 'HIVE_CONNECT',
  LifeComb = 'LIFE_COMB',
  LifeHive = 'LIFE_HIVE'
}

/** Error occurred while getting data. */
export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  error?: Maybe<Scalars['Json']>;
  message: Scalars['String'];
};

export enum ErrorSeverity {
  Error = 'ERROR',
  Fatal = 'FATAL',
  Info = 'INFO',
  Warning = 'WARNING'
}

export enum ErrorStatus {
  Closed = 'CLOSED',
  Deferred = 'DEFERRED',
  Fixed = 'FIXED',
  New = 'NEW',
  Open = 'OPEN',
  Rejected = 'REJECTED',
  Reopen = 'REOPEN',
  Retest = 'RETEST'
}

export type Failure = {
  __typename?: 'Failure';
  _aggregation?: Maybe<AggregationFunction>;
  _bin?: Maybe<Array<Maybe<Failure>>>;
  code: Scalars['String'];
  data?: Maybe<Scalars['Json']>;
  device_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_flagged: Scalars['Boolean'];
  is_seen: Scalars['Boolean'];
  message: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  severity: ErrorSeverity;
  status: ErrorStatus;
  timestamp: Scalars['DateTime'];
};

export enum FailureFieldEnum {
  Code = 'code',
  Data = 'data',
  DeviceId = 'device_id',
  Id = 'id',
  IsFlagged = 'is_flagged',
  IsSeen = 'is_seen',
  Message = 'message',
  Note = 'note',
  Severity = 'severity',
  Status = 'status',
  Timestamp = 'timestamp',
  Updated = 'updated'
}

/** This table represents any devices that might act as a gateway for data through the IoT pipeline. Gateways might be devices themselves, or digital infrastructure like HTTPS endpoints */
export type Gateway = {
  __typename?: 'Gateway';
  gateway_id: Scalars['Int'];
  stage: Stage;
  type: GatewayType;
};

export type GatewayResult = Error | Gateway;

export enum GatewayType {
  Https = 'HTTPS'
}

/** IDs for devices are created first in this global ID table in order to reduce the byte size. ID’s are auto-incremented from the latest value in the table. */
export type Global = {
  __typename?: 'Global';
  id?: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
  type?: Maybe<GlobalType>;
};

export type GlobalConnection = {
  __typename?: 'GlobalConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<GlobalEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GlobalEdge = {
  __typename?: 'GlobalEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Global>;
};

export enum GlobalType {
  Bootloader = 'BOOTLOADER',
  Firmware = 'FIRMWARE',
  Gateway = 'GATEWAY',
  LifeComb = 'LIFE_COMB',
  LifeHive = 'LIFE_HIVE'
}

/** Devices that manage at an Hive level. */
export type HiveDevice = {
  __typename?: 'HiveDevice';
  _aggregation?: Maybe<AggregationFunction>;
  comb_slots?: Maybe<Array<Maybe<CombSlot>>>;
  customer?: Maybe<Customer>;
  date_created?: Maybe<Scalars['DateTime']>;
  device_id?: Maybe<Scalars['ID']>;
  events?: Maybe<Array<Maybe<DeviceEvent>>>;
  location?: Maybe<Location>;
  sensor_data?: Maybe<Array<Maybe<SensorData>>>;
  stage?: Maybe<Stage>;
  /** State of a device at specific time. Mostly meta information about the current software level configuration. */
  state?: Maybe<DeviceState>;
  treatments?: Maybe<Array<Maybe<Treatment>>>;
  type?: Maybe<DeviceType>;
  version?: Maybe<Scalars['String']>;
};


/** Devices that manage at an Hive level. */
export type HiveDeviceEventsArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


/** Devices that manage at an Hive level. */
export type HiveDeviceSensor_DataArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<SensorType>;
};


/** Devices that manage at an Hive level. */
export type HiveDeviceTreatmentsArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<TreatEventResult>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};

export enum Language {
  De = 'DE',
  En = 'EN',
  Fr = 'FR',
  It = 'IT'
}

export type Location = {
  __typename?: 'Location';
  apiary?: Maybe<Ref>;
  date_moved?: Maybe<Scalars['DateTime']>;
  hive?: Maybe<Ref>;
};

export type ManagerAnalytics = {
  __typename?: 'ManagerAnalytics';
  apiary_countries?: Maybe<Array<Maybe<Aggregated>>>;
  apiary_types?: Maybe<Array<Maybe<Aggregated>>>;
  colony_types?: Maybe<Array<Maybe<Aggregated>>>;
  hive_types?: Maybe<Array<Maybe<Aggregated>>>;
  queen_races?: Maybe<Array<Maybe<Aggregated>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  /** @deprecated As of 19.7.22, replaced by (createGlobalIDs()) */
  createGateway: GatewayResult;
  createGlobalIDs: Array<Maybe<Global>>;
  updateFailure?: Maybe<Failure>;
};


export type MutationCreateCustomerArgs = {
  address: Scalars['String'];
  company: Scalars['String'];
  customer_id?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  language: Language;
  last_name: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreateGatewayArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
  global_id: Scalars['Int'];
  stage: Stage;
  type: GatewayType;
  version: Scalars['String'];
};


export type MutationCreateGlobalIDsArgs = {
  amount: Scalars['Int'];
  type: GlobalType;
};


export type MutationUpdateFailureArgs = {
  id: Scalars['Int'];
  is_flagged?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ErrorStatus>;
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PipelineEvent = {
  __typename?: 'PipelineEvent';
  _aggregation?: Maybe<AggregationFunction>;
  _bin?: Maybe<Array<Maybe<PipelineEvent>>>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  severity?: Maybe<Severity>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

/** Digital and physical products */
export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  lead?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  status?: Maybe<ProductStatus>;
  version?: Maybe<Scalars['String']>;
};

export enum ProductStatus {
  Completed = 'COMPLETED',
  Depreciated = 'DEPRECIATED',
  Development = 'DEVELOPMENT',
  Frozen = 'FROZEN',
  Legacy = 'LEGACY',
  Maintenance = 'MAINTENANCE',
  NotStarted = 'NOT_STARTED'
}

export type Query = {
  __typename?: 'Query';
  getApiaryDevice?: Maybe<ApiaryDevice>;
  getAuthByEmail?: Maybe<Auth>;
  getAuthByUID?: Maybe<Auth>;
  getCustomer?: Maybe<Customer>;
  getCustomers?: Maybe<Array<Maybe<Customer>>>;
  getDevices?: Maybe<Array<Maybe<DeviceResult>>>;
  getFailures: Array<Maybe<Failure>>;
  getGateways?: Maybe<Array<Maybe<Gateway>>>;
  getGlobalIDs?: Maybe<GlobalConnection>;
  getHiveDevice?: Maybe<HiveDevice>;
  getManagerAnalytics?: Maybe<ManagerAnalytics>;
  getPipelineAnalytics?: Maybe<Array<Maybe<PipelineEvent>>>;
  getProducts?: Maybe<Array<Maybe<Product>>>;
  getRoadmap?: Maybe<Array<Maybe<Roadmap>>>;
  getSystemEvents?: Maybe<Array<Maybe<SystemEvent>>>;
  getUserAnalytics?: Maybe<UserAnalytics>;
};


export type QueryGetApiaryDeviceArgs = {
  device_id: Scalars['String'];
};


export type QueryGetAuthByEmailArgs = {
  email: Scalars['String'];
};


export type QueryGetAuthByUidArgs = {
  uid: Scalars['String'];
};


export type QueryGetCustomerArgs = {
  customer_id: Scalars['String'];
};


export type QueryGetDevicesArgs = {
  _groupBy?: InputMaybe<Array<DeviceFieldEnum>>;
  customer_id?: InputMaybe<Scalars['String']>;
  device_ids?: InputMaybe<Array<Scalars['String']>>;
  include?: InputMaybe<Array<DeviceType>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFailuresArgs = {
  _groupBy?: InputMaybe<Array<FailureFieldEnum>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type QueryGetGlobalIDsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetHiveDeviceArgs = {
  device_id: Scalars['String'];
};


export type QueryGetManagerAnalyticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPipelineAnalyticsArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type QueryGetRoadmapArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type QueryGetSystemEventsArgs = {
  _bin?: InputMaybe<BinTimeEnum>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type QueryGetUserAnalyticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Ref = {
  __typename?: 'Ref';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Epics and milestones of the company roadmap */
export type Roadmap = {
  __typename?: 'Roadmap';
  end_date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<RoadmapType>;
};

export enum RoadmapType {
  Epic = 'EPIC',
  Milestone = 'MILESTONE'
}

/** Sensor data from peripheral devices. */
export type SensorData = {
  __typename?: 'SensorData';
  _aggregation?: Maybe<AggregationFunction>;
  _bin?: Maybe<Array<Maybe<SensorData>>>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ts: Scalars['DateTime'];
  type?: Maybe<SensorType>;
  units?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export enum SensorType {
  Temp = 'TEMP',
  Weight = 'WEIGHT'
}

export enum Severity {
  Alert = 'ALERT',
  Critical = 'CRITICAL',
  Debug = 'DEBUG',
  Default = 'DEFAULT',
  Emergency = 'EMERGENCY',
  Error = 'ERROR',
  Info = 'INFO',
  Notice = 'NOTICE',
  Warning = 'WARNING'
}

export type SortInput = {
  asc?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Stage {
  Decommissioned = 'DECOMMISSIONED',
  Deprecated = 'DEPRECATED',
  Experimental = 'EXPERIMENTAL',
  Legacy = 'LEGACY',
  Stable = 'STABLE'
}

export type SystemEvent = DeviceEvent | Failure;

export enum TreatEventResult {
  Abort = 'ABORT',
  NoWire = 'NO_WIRE',
  Ok = 'OK',
  PartShort = 'PART_SHORT',
  ROff = 'R_OFF',
  RRange = 'R_RANGE',
  RSinking = 'R_SINKING',
  Short = 'SHORT',
  Unknown = 'UNKNOWN'
}

export enum TreatStatus {
  Complete = 'COMPLETE',
  Timeout = 'TIMEOUT',
  Waiting = 'WAITING'
}

export type Treatment = {
  __typename?: 'Treatment';
  _aggregation?: Maybe<AggregationFunction>;
  _bin?: Maybe<Array<Maybe<Treatment>>>;
  comb_id: Scalars['String'];
  comb_position?: Maybe<Scalars['Int']>;
  device_id: Scalars['String'];
  energy?: Maybe<Scalars['Int']>;
  from_now?: Maybe<Scalars['String']>;
  r_cold?: Maybe<Scalars['Int']>;
  r_delta?: Maybe<Scalars['Int']>;
  result?: Maybe<TreatEventResult>;
  status?: Maybe<TreatStatus>;
  timestamp_end?: Maybe<Scalars['DateTime']>;
  timestamp_start?: Maybe<Scalars['DateTime']>;
  treatment_id?: Maybe<Scalars['ID']>;
};

export type UserAnalytics = {
  __typename?: 'UserAnalytics';
  realtime?: Maybe<Array<Maybe<UserRealtime>>>;
  report?: Maybe<Array<Maybe<UserReport>>>;
};

export type UserRealtime = {
  __typename?: 'UserRealtime';
  active?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
};

export type UserReport = {
  __typename?: 'UserReport';
  active_1_day?: Maybe<Scalars['String']>;
  active_7_day?: Maybe<Scalars['String']>;
  active_28_day?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  new_users?: Maybe<Scalars['String']>;
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getProducts?: Array<{ __typename?: 'Product', id?: string | null, lead?: string | null, notes?: string | null, name?: string | null, progress?: number | null, status?: ProductStatus | null, version?: string | null } | null> | null };


export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lead"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;