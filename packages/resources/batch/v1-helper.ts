import { ResourceTemplate, Template } from "../resourceTemplate";
import { CronJob, CronJobList, CronJobSpec, CronJobStatus, Job, JobCondition, JobList, JobSpec, JobStatus, JobTemplateSpec } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ObjectReference, PodTemplateSpec } from "../core/v1";

export interface CronJobHelper extends CronJob {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CronJobHelper;
    spec: CronJobSpecHelper;
    $spec(x: CronJobSpecHelper): CronJobHelper;
    status: CronJobStatusHelper;
    $status(x: CronJobStatusHelper): CronJobHelper;
}

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate implements CronJobHelper {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobHelper.kind, CronJobHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CronJobSpecHelper;
    get spec(): CronJobSpecHelper {
        return this._spec
    }
    set spec(x: CronJobSpecHelper) {
        this._spec = x
    }
    $Spec(x: CronJobSpecHelper) {
        this.spec = x; return this
    }

    _status: CronJobStatusHelper;
    get status(): CronJobStatusHelper {
        return this._status
    }
    set status(x: CronJobStatusHelper) {
        this._status = x
    }
    $Status(x: CronJobStatusHelper) {
        this.status = x; return this
    }
}

export interface CronJobListHelper extends CronJobList {
    $items(x: Array<CronJob>): CronJobListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CronJobListHelper;
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate implements CronJobListHelper {
    static kind = 'CronJobList';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobListHelper.kind, CronJobListHelper.apiVersion)
    }

    _items: Array<CronJob>;
    get items(): Array<CronJob> {
        return this._items
    }
    set items(x: Array<CronJob>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CronJob>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface CronJobSpecHelper extends CronJobSpec {
    $concurrencyPolicy(x: string): CronJobSpecHelper;
    $failedJobsHistoryLimit(x: number): CronJobSpecHelper;
    jobTemplate: JobTemplateSpecHelper;
    $jobTemplate(x: JobTemplateSpecHelper): CronJobSpecHelper;
    $schedule(x: string): CronJobSpecHelper;
    $startingDeadlineSeconds(x: number): CronJobSpecHelper;
    $successfulJobsHistoryLimit(x: number): CronJobSpecHelper;
    $suspend(x: boolean): CronJobSpecHelper;
}

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export class CronJobSpecHelper extends Template implements CronJobSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _concurrencyPolicy: string;
    get concurrencyPolicy(): string {
        return this._concurrencyPolicy
    }
    set concurrencyPolicy(x: string) {
        this._concurrencyPolicy = x
    }
    $ConcurrencyPolicy(x: string) {
        this.concurrencyPolicy = x; return this
    }

    _failedJobsHistoryLimit: number;
    get failedJobsHistoryLimit(): number {
        return this._failedJobsHistoryLimit
    }
    set failedJobsHistoryLimit(x: number) {
        this._failedJobsHistoryLimit = x
    }
    $FailedJobsHistoryLimit(x: number) {
        this.failedJobsHistoryLimit = x; return this
    }

    _jobTemplate: JobTemplateSpecHelper;
    get jobTemplate(): JobTemplateSpecHelper {
        return this._jobTemplate
    }
    set jobTemplate(x: JobTemplateSpecHelper) {
        this._jobTemplate = x
    }
    $JobTemplate(x: JobTemplateSpecHelper) {
        this.jobTemplate = x; return this
    }

    _schedule: string;
    get schedule(): string {
        return this._schedule
    }
    set schedule(x: string) {
        this._schedule = x
    }
    $Schedule(x: string) {
        this.schedule = x; return this
    }

    _startingDeadlineSeconds: number;
    get startingDeadlineSeconds(): number {
        return this._startingDeadlineSeconds
    }
    set startingDeadlineSeconds(x: number) {
        this._startingDeadlineSeconds = x
    }
    $StartingDeadlineSeconds(x: number) {
        this.startingDeadlineSeconds = x; return this
    }

    _successfulJobsHistoryLimit: number;
    get successfulJobsHistoryLimit(): number {
        return this._successfulJobsHistoryLimit
    }
    set successfulJobsHistoryLimit(x: number) {
        this._successfulJobsHistoryLimit = x
    }
    $SuccessfulJobsHistoryLimit(x: number) {
        this.successfulJobsHistoryLimit = x; return this
    }

    _suspend: boolean;
    get suspend(): boolean {
        return this._suspend
    }
    set suspend(x: boolean) {
        this._suspend = x
    }
    $Suspend(x: boolean) {
        this.suspend = x; return this
    }
}

export interface CronJobStatusHelper extends CronJobStatus {
    $active(x: Array<ObjectReference>): CronJobStatusHelper;
    $lastScheduleTime(x: Time): CronJobStatusHelper;
    $lastSuccessfulTime(x: Time): CronJobStatusHelper;
}

/** CronJobStatus represents the current state of a cron job. */
export class CronJobStatusHelper extends Template implements CronJobStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: Array<ObjectReference>;
    get active(): Array<ObjectReference> {
        return this._active
    }
    set active(x: Array<ObjectReference>) {
        this._active = this.set(this.active, x)
    }
    $Active(x: Array<ObjectReference>) {
        this.active = x; return this
    }

    _lastScheduleTime: Time;
    get lastScheduleTime(): Time {
        return this._lastScheduleTime
    }
    set lastScheduleTime(x: Time) {
        this._lastScheduleTime = x
    }
    $LastScheduleTime(x: Time) {
        this.lastScheduleTime = x; return this
    }

    _lastSuccessfulTime: Time;
    get lastSuccessfulTime(): Time {
        return this._lastSuccessfulTime
    }
    set lastSuccessfulTime(x: Time) {
        this._lastSuccessfulTime = x
    }
    $LastSuccessfulTime(x: Time) {
        this.lastSuccessfulTime = x; return this
    }
}

export interface JobHelper extends Job {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): JobHelper;
    spec: JobSpecHelper;
    $spec(x: JobSpecHelper): JobHelper;
    status: JobStatusHelper;
    $status(x: JobStatusHelper): JobHelper;
}

/** Job represents the configuration of a single job. */
export class JobHelper extends ResourceTemplate implements JobHelper {
    static kind = 'Job';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, JobHelper.kind, JobHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: JobSpecHelper;
    get spec(): JobSpecHelper {
        return this._spec
    }
    set spec(x: JobSpecHelper) {
        this._spec = x
    }
    $Spec(x: JobSpecHelper) {
        this.spec = x; return this
    }

    _status: JobStatusHelper;
    get status(): JobStatusHelper {
        return this._status
    }
    set status(x: JobStatusHelper) {
        this._status = x
    }
    $Status(x: JobStatusHelper) {
        this.status = x; return this
    }
}

export interface JobConditionHelper extends JobCondition {
    $lastProbeTime(x: Time): JobConditionHelper;
    $lastTransitionTime(x: Time): JobConditionHelper;
    $message(x: string): JobConditionHelper;
    $reason(x: string): JobConditionHelper;
    $status(x: string): JobConditionHelper;
    $type(x: string): JobConditionHelper;
}

/** JobCondition describes current state of a job. */
export class JobConditionHelper extends Template implements JobConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: Time;
    get lastProbeTime(): Time {
        return this._lastProbeTime
    }
    set lastProbeTime(x: Time) {
        this._lastProbeTime = x
    }
    $LastProbeTime(x: Time) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $LastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $Message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $Reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $Status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface JobListHelper extends JobList {
    $items(x: Array<Job>): JobListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): JobListHelper;
}

/** JobList is a collection of jobs. */
export class JobListHelper extends ResourceTemplate implements JobListHelper {
    static kind = 'JobList';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, JobListHelper.kind, JobListHelper.apiVersion)
    }

    _items: Array<Job>;
    get items(): Array<Job> {
        return this._items
    }
    set items(x: Array<Job>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<Job>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface JobSpecHelper extends JobSpec {
    $activeDeadlineSeconds(x: number): JobSpecHelper;
    $backoffLimit(x: number): JobSpecHelper;
    $completionMode(x: string): JobSpecHelper;
    $completions(x: number): JobSpecHelper;
    $manualSelector(x: boolean): JobSpecHelper;
    $parallelism(x: number): JobSpecHelper;
    selector: LabelSelectorHelper;
    $selector(x: LabelSelectorHelper): JobSpecHelper;
    $suspend(x: boolean): JobSpecHelper;
    template: PodTemplateSpecHelper;
    $template(x: PodTemplateSpecHelper): JobSpecHelper;
    $ttlSecondsAfterFinished(x: number): JobSpecHelper;
}

/** JobSpec describes how the job execution will look like. */
export class JobSpecHelper extends Template implements JobSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _activeDeadlineSeconds: number;
    get activeDeadlineSeconds(): number {
        return this._activeDeadlineSeconds
    }
    set activeDeadlineSeconds(x: number) {
        this._activeDeadlineSeconds = x
    }
    $ActiveDeadlineSeconds(x: number) {
        this.activeDeadlineSeconds = x; return this
    }

    _backoffLimit: number;
    get backoffLimit(): number {
        return this._backoffLimit
    }
    set backoffLimit(x: number) {
        this._backoffLimit = x
    }
    $BackoffLimit(x: number) {
        this.backoffLimit = x; return this
    }

    _completionMode: string;
    get completionMode(): string {
        return this._completionMode
    }
    set completionMode(x: string) {
        this._completionMode = x
    }
    $CompletionMode(x: string) {
        this.completionMode = x; return this
    }

    _completions: number;
    get completions(): number {
        return this._completions
    }
    set completions(x: number) {
        this._completions = x
    }
    $Completions(x: number) {
        this.completions = x; return this
    }

    _manualSelector: boolean;
    get manualSelector(): boolean {
        return this._manualSelector
    }
    set manualSelector(x: boolean) {
        this._manualSelector = x
    }
    $ManualSelector(x: boolean) {
        this.manualSelector = x; return this
    }

    _parallelism: number;
    get parallelism(): number {
        return this._parallelism
    }
    set parallelism(x: number) {
        this._parallelism = x
    }
    $Parallelism(x: number) {
        this.parallelism = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $Selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }

    _suspend: boolean;
    get suspend(): boolean {
        return this._suspend
    }
    set suspend(x: boolean) {
        this._suspend = x
    }
    $Suspend(x: boolean) {
        this.suspend = x; return this
    }

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $Template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }

    _ttlSecondsAfterFinished: number;
    get ttlSecondsAfterFinished(): number {
        return this._ttlSecondsAfterFinished
    }
    set ttlSecondsAfterFinished(x: number) {
        this._ttlSecondsAfterFinished = x
    }
    $TtlSecondsAfterFinished(x: number) {
        this.ttlSecondsAfterFinished = x; return this
    }
}

export interface JobStatusHelper extends JobStatus {
    $active(x: number): JobStatusHelper;
    $completedIndexes(x: string): JobStatusHelper;
    $completionTime(x: Time): JobStatusHelper;
    $conditions(x: Array<JobCondition>): JobStatusHelper;
    $failed(x: number): JobStatusHelper;
    $startTime(x: Time): JobStatusHelper;
    $succeeded(x: number): JobStatusHelper;
}

/** JobStatus represents the current state of a Job. */
export class JobStatusHelper extends Template implements JobStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: number;
    get active(): number {
        return this._active
    }
    set active(x: number) {
        this._active = x
    }
    $Active(x: number) {
        this.active = x; return this
    }

    _completedIndexes: string;
    get completedIndexes(): string {
        return this._completedIndexes
    }
    set completedIndexes(x: string) {
        this._completedIndexes = x
    }
    $CompletedIndexes(x: string) {
        this.completedIndexes = x; return this
    }

    _completionTime: Time;
    get completionTime(): Time {
        return this._completionTime
    }
    set completionTime(x: Time) {
        this._completionTime = x
    }
    $CompletionTime(x: Time) {
        this.completionTime = x; return this
    }

    _conditions: Array<JobCondition>;
    get conditions(): Array<JobCondition> {
        return this._conditions
    }
    set conditions(x: Array<JobCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $Conditions(x: Array<JobCondition>) {
        this.conditions = x; return this
    }

    _failed: number;
    get failed(): number {
        return this._failed
    }
    set failed(x: number) {
        this._failed = x
    }
    $Failed(x: number) {
        this.failed = x; return this
    }

    _startTime: Time;
    get startTime(): Time {
        return this._startTime
    }
    set startTime(x: Time) {
        this._startTime = x
    }
    $StartTime(x: Time) {
        this.startTime = x; return this
    }

    _succeeded: number;
    get succeeded(): number {
        return this._succeeded
    }
    set succeeded(x: number) {
        this._succeeded = x
    }
    $Succeeded(x: number) {
        this.succeeded = x; return this
    }
}

export interface JobTemplateSpecHelper extends JobTemplateSpec {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): JobTemplateSpecHelper;
    spec: JobSpecHelper;
    $spec(x: JobSpecHelper): JobTemplateSpecHelper;
}

/** JobTemplateSpec describes the data a Job should have when created from a template */
export class JobTemplateSpecHelper extends Template implements JobTemplateSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: JobSpecHelper;
    get spec(): JobSpecHelper {
        return this._spec
    }
    set spec(x: JobSpecHelper) {
        this._spec = x
    }
    $Spec(x: JobSpecHelper) {
        this.spec = x; return this
    }
}
