import { ResourceTemplate, Template } from "../resourceTemplate";
import { CronJob, CronJobList, CronJobSpec, CronJobStatus, Job, JobCondition, JobList, JobSpec, JobStatus, JobTemplateSpec } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { ObjectReference, PodTemplateSpec } from "../core/v1";
import { PodTemplateSpecHelper } from "../core/v1-helper";

export interface CronJobHelper extends CronJob {
    $metadata(x: ObjectMetaHelper): CronJobHelper;
    $spec(x: CronJobSpecHelper): CronJobHelper;
    $status(x: CronJobStatusHelper): CronJobHelper;
}

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate implements CronJobHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "CronJob", "batch/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CronJobSpecHelper;
    get spec(): CronJobSpecHelper {
        return this._spec
    }
    set spec(x: CronJobSpecHelper) {
        this._spec = x
    }
    $spec(x: CronJobSpecHelper) {
        this.spec = x; return this
    }

    _status: CronJobStatusHelper;
    get status(): CronJobStatusHelper {
        return this._status
    }
    set status(x: CronJobStatusHelper) {
        this._status = x
    }
    $status(x: CronJobStatusHelper) {
        this.status = x; return this
    }
}

export interface CronJobListHelper extends CronJobList {
    $items(x: Array<CronJob>): CronJobListHelper;
    $metadata(x: ListMetaHelper): CronJobListHelper;
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate implements CronJobListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "CronJobList", "batch/v1")
    }

    _items: Array<CronJob>;
    get items(): Array<CronJob> {
        return this._items
    }
    set items(x: Array<CronJob>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<CronJob>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface CronJobSpecHelper extends CronJobSpec {
    $concurrencyPolicy(x: string): CronJobSpecHelper;
    $failedJobsHistoryLimit(x: number): CronJobSpecHelper;
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
    $concurrencyPolicy(x: string) {
        this.concurrencyPolicy = x; return this
    }

    _failedJobsHistoryLimit: number;
    get failedJobsHistoryLimit(): number {
        return this._failedJobsHistoryLimit
    }
    set failedJobsHistoryLimit(x: number) {
        this._failedJobsHistoryLimit = x
    }
    $failedJobsHistoryLimit(x: number) {
        this.failedJobsHistoryLimit = x; return this
    }

    _jobTemplate: JobTemplateSpecHelper;
    get jobTemplate(): JobTemplateSpecHelper {
        return this._jobTemplate
    }
    set jobTemplate(x: JobTemplateSpecHelper) {
        this._jobTemplate = x
    }
    $jobTemplate(x: JobTemplateSpecHelper) {
        this.jobTemplate = x; return this
    }

    _schedule: string;
    get schedule(): string {
        return this._schedule
    }
    set schedule(x: string) {
        this._schedule = x
    }
    $schedule(x: string) {
        this.schedule = x; return this
    }

    _startingDeadlineSeconds: number;
    get startingDeadlineSeconds(): number {
        return this._startingDeadlineSeconds
    }
    set startingDeadlineSeconds(x: number) {
        this._startingDeadlineSeconds = x
    }
    $startingDeadlineSeconds(x: number) {
        this.startingDeadlineSeconds = x; return this
    }

    _successfulJobsHistoryLimit: number;
    get successfulJobsHistoryLimit(): number {
        return this._successfulJobsHistoryLimit
    }
    set successfulJobsHistoryLimit(x: number) {
        this._successfulJobsHistoryLimit = x
    }
    $successfulJobsHistoryLimit(x: number) {
        this.successfulJobsHistoryLimit = x; return this
    }

    _suspend: boolean;
    get suspend(): boolean {
        return this._suspend
    }
    set suspend(x: boolean) {
        this._suspend = x
    }
    $suspend(x: boolean) {
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
    $active(x: Array<ObjectReference>) {
        this.active = x; return this
    }

    _lastScheduleTime: Time;
    get lastScheduleTime(): Time {
        return this._lastScheduleTime
    }
    set lastScheduleTime(x: Time) {
        this._lastScheduleTime = x
    }
    $lastScheduleTime(x: Time) {
        this.lastScheduleTime = x; return this
    }

    _lastSuccessfulTime: Time;
    get lastSuccessfulTime(): Time {
        return this._lastSuccessfulTime
    }
    set lastSuccessfulTime(x: Time) {
        this._lastSuccessfulTime = x
    }
    $lastSuccessfulTime(x: Time) {
        this.lastSuccessfulTime = x; return this
    }
}

export interface JobHelper extends Job {
    $metadata(x: ObjectMetaHelper): JobHelper;
    $spec(x: JobSpecHelper): JobHelper;
    $status(x: JobStatusHelper): JobHelper;
}

/** Job represents the configuration of a single job. */
export class JobHelper extends ResourceTemplate implements JobHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Job", "batch/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: JobSpecHelper;
    get spec(): JobSpecHelper {
        return this._spec
    }
    set spec(x: JobSpecHelper) {
        this._spec = x
    }
    $spec(x: JobSpecHelper) {
        this.spec = x; return this
    }

    _status: JobStatusHelper;
    get status(): JobStatusHelper {
        return this._status
    }
    set status(x: JobStatusHelper) {
        this._status = x
    }
    $status(x: JobStatusHelper) {
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
    $lastProbeTime(x: Time) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface JobListHelper extends JobList {
    $items(x: Array<Job>): JobListHelper;
    $metadata(x: ListMetaHelper): JobListHelper;
}

/** JobList is a collection of jobs. */
export class JobListHelper extends ResourceTemplate implements JobListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "JobList", "batch/v1")
    }

    _items: Array<Job>;
    get items(): Array<Job> {
        return this._items
    }
    set items(x: Array<Job>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Job>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
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
    $selector(x: LabelSelectorHelper): JobSpecHelper;
    $suspend(x: boolean): JobSpecHelper;
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
    $activeDeadlineSeconds(x: number) {
        this.activeDeadlineSeconds = x; return this
    }

    _backoffLimit: number;
    get backoffLimit(): number {
        return this._backoffLimit
    }
    set backoffLimit(x: number) {
        this._backoffLimit = x
    }
    $backoffLimit(x: number) {
        this.backoffLimit = x; return this
    }

    _completionMode: string;
    get completionMode(): string {
        return this._completionMode
    }
    set completionMode(x: string) {
        this._completionMode = x
    }
    $completionMode(x: string) {
        this.completionMode = x; return this
    }

    _completions: number;
    get completions(): number {
        return this._completions
    }
    set completions(x: number) {
        this._completions = x
    }
    $completions(x: number) {
        this.completions = x; return this
    }

    _manualSelector: boolean;
    get manualSelector(): boolean {
        return this._manualSelector
    }
    set manualSelector(x: boolean) {
        this._manualSelector = x
    }
    $manualSelector(x: boolean) {
        this.manualSelector = x; return this
    }

    _parallelism: number;
    get parallelism(): number {
        return this._parallelism
    }
    set parallelism(x: number) {
        this._parallelism = x
    }
    $parallelism(x: number) {
        this.parallelism = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }

    _suspend: boolean;
    get suspend(): boolean {
        return this._suspend
    }
    set suspend(x: boolean) {
        this._suspend = x
    }
    $suspend(x: boolean) {
        this.suspend = x; return this
    }

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }

    _ttlSecondsAfterFinished: number;
    get ttlSecondsAfterFinished(): number {
        return this._ttlSecondsAfterFinished
    }
    set ttlSecondsAfterFinished(x: number) {
        this._ttlSecondsAfterFinished = x
    }
    $ttlSecondsAfterFinished(x: number) {
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
    $active(x: number) {
        this.active = x; return this
    }

    _completedIndexes: string;
    get completedIndexes(): string {
        return this._completedIndexes
    }
    set completedIndexes(x: string) {
        this._completedIndexes = x
    }
    $completedIndexes(x: string) {
        this.completedIndexes = x; return this
    }

    _completionTime: Time;
    get completionTime(): Time {
        return this._completionTime
    }
    set completionTime(x: Time) {
        this._completionTime = x
    }
    $completionTime(x: Time) {
        this.completionTime = x; return this
    }

    _conditions: Array<JobCondition>;
    get conditions(): Array<JobCondition> {
        return this._conditions
    }
    set conditions(x: Array<JobCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<JobCondition>) {
        this.conditions = x; return this
    }

    _failed: number;
    get failed(): number {
        return this._failed
    }
    set failed(x: number) {
        this._failed = x
    }
    $failed(x: number) {
        this.failed = x; return this
    }

    _startTime: Time;
    get startTime(): Time {
        return this._startTime
    }
    set startTime(x: Time) {
        this._startTime = x
    }
    $startTime(x: Time) {
        this.startTime = x; return this
    }

    _succeeded: number;
    get succeeded(): number {
        return this._succeeded
    }
    set succeeded(x: number) {
        this._succeeded = x
    }
    $succeeded(x: number) {
        this.succeeded = x; return this
    }
}

export interface JobTemplateSpecHelper extends JobTemplateSpec {
    $metadata(x: ObjectMetaHelper): JobTemplateSpecHelper;
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
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: JobSpecHelper;
    get spec(): JobSpecHelper {
        return this._spec
    }
    set spec(x: JobSpecHelper) {
        this._spec = x
    }
    $spec(x: JobSpecHelper) {
        this.spec = x; return this
    }
}
