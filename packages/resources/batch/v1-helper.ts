import { ResourceTemplate, Template } from "../resourceTemplate";
import { CronJob, CronJobList, CronJobSpec, CronJobStatus, Job, JobCondition, JobList, JobSpec, JobStatus, JobTemplateSpec } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ObjectReference, PodTemplateSpec } from "../core/v1";

export interface CronJobHelper extends CronJob {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate implements CronJobHelper {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobHelper.kind, CronJobHelper.apiVersion)
    }

    _metadata: any;
    get metadata(): any /*ObjectMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ObjectMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ObjectMetaHelper*/) {
        this.metadata = x; return this
    }

    _spec: any;
    get spec(): any /*CronJobSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*CronJobSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*CronJobSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*CronJobStatusHelper*/ {
        return this._status
    }
    set status(x: any /*CronJobStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*CronJobStatusHelper*/) {
        this.status = x; return this
    }
}

export interface CronJobListHelper extends CronJobList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate implements CronJobListHelper {
    static kind = 'CronJobList';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobListHelper.kind, CronJobListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CronJob>*/ {
        return this._items
    }
    set items(x: any /*Array<CronJob>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CronJob>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface CronJobSpecHelper extends CronJobSpec {
    $concurrencyPolicy(x: any): any;
    $failedJobsHistoryLimit(x: any): any;
    $jobTemplate(x: any): any;
    $schedule(x: any): any;
    $startingDeadlineSeconds(x: any): any;
    $successfulJobsHistoryLimit(x: any): any;
    $suspend(x: any): any;
}

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export class CronJobSpecHelper extends Template implements CronJobSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _concurrencyPolicy: any;
    get concurrencyPolicy(): any /*string*/ {
        return this._concurrencyPolicy
    }
    set concurrencyPolicy(x: any /*string*/) {
        this._concurrencyPolicy = x
    }
    setConcurrencyPolicy(x: any /*string*/) {
        this.concurrencyPolicy = x; return this
    }

    _failedJobsHistoryLimit: any;
    get failedJobsHistoryLimit(): any /*number*/ {
        return this._failedJobsHistoryLimit
    }
    set failedJobsHistoryLimit(x: any /*number*/) {
        this._failedJobsHistoryLimit = x
    }
    setFailedJobsHistoryLimit(x: any /*number*/) {
        this.failedJobsHistoryLimit = x; return this
    }

    _jobTemplate: any;
    get jobTemplate(): any /*JobTemplateSpecHelper*/ {
        return this._jobTemplate
    }
    set jobTemplate(x: any /*JobTemplateSpecHelper*/) {
        this._jobTemplate = x
    }
    setJobTemplate(x: any /*JobTemplateSpecHelper*/) {
        this.jobTemplate = x; return this
    }

    _schedule: any;
    get schedule(): any /*string*/ {
        return this._schedule
    }
    set schedule(x: any /*string*/) {
        this._schedule = x
    }
    setSchedule(x: any /*string*/) {
        this.schedule = x; return this
    }

    _startingDeadlineSeconds: any;
    get startingDeadlineSeconds(): any /*number*/ {
        return this._startingDeadlineSeconds
    }
    set startingDeadlineSeconds(x: any /*number*/) {
        this._startingDeadlineSeconds = x
    }
    setStartingDeadlineSeconds(x: any /*number*/) {
        this.startingDeadlineSeconds = x; return this
    }

    _successfulJobsHistoryLimit: any;
    get successfulJobsHistoryLimit(): any /*number*/ {
        return this._successfulJobsHistoryLimit
    }
    set successfulJobsHistoryLimit(x: any /*number*/) {
        this._successfulJobsHistoryLimit = x
    }
    setSuccessfulJobsHistoryLimit(x: any /*number*/) {
        this.successfulJobsHistoryLimit = x; return this
    }

    _suspend: any;
    get suspend(): any /*boolean*/ {
        return this._suspend
    }
    set suspend(x: any /*boolean*/) {
        this._suspend = x
    }
    setSuspend(x: any /*boolean*/) {
        this.suspend = x; return this
    }
}

export interface CronJobStatusHelper extends CronJobStatus {
    $active(x: any): any;
    $lastScheduleTime(x: any): any;
    $lastSuccessfulTime(x: any): any;
}

/** CronJobStatus represents the current state of a cron job. */
export class CronJobStatusHelper extends Template implements CronJobStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: any;
    get active(): any /*Array<ObjectReference>*/ {
        return this._active
    }
    set active(x: any /*Array<ObjectReference>*/) {
        this._active = this.set(this.active, x)
    }
    setActive(x: any /*Array<ObjectReference>*/) {
        this.active = x; return this
    }

    _lastScheduleTime: any;
    get lastScheduleTime(): any /*Time*/ {
        return this._lastScheduleTime
    }
    set lastScheduleTime(x: any /*Time*/) {
        this._lastScheduleTime = x
    }
    setLastScheduleTime(x: any /*Time*/) {
        this.lastScheduleTime = x; return this
    }

    _lastSuccessfulTime: any;
    get lastSuccessfulTime(): any /*Time*/ {
        return this._lastSuccessfulTime
    }
    set lastSuccessfulTime(x: any /*Time*/) {
        this._lastSuccessfulTime = x
    }
    setLastSuccessfulTime(x: any /*Time*/) {
        this.lastSuccessfulTime = x; return this
    }
}

export interface JobHelper extends Job {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Job represents the configuration of a single job. */
export class JobHelper extends ResourceTemplate implements JobHelper {
    static kind = 'Job';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, JobHelper.kind, JobHelper.apiVersion)
    }

    _metadata: any;
    get metadata(): any /*ObjectMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ObjectMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ObjectMetaHelper*/) {
        this.metadata = x; return this
    }

    _spec: any;
    get spec(): any /*JobSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*JobSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*JobSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*JobStatusHelper*/ {
        return this._status
    }
    set status(x: any /*JobStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*JobStatusHelper*/) {
        this.status = x; return this
    }
}

export interface JobConditionHelper extends JobCondition {
    $lastProbeTime(x: any): any;
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** JobCondition describes current state of a job. */
export class JobConditionHelper extends Template implements JobConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: any;
    get lastProbeTime(): any /*Time*/ {
        return this._lastProbeTime
    }
    set lastProbeTime(x: any /*Time*/) {
        this._lastProbeTime = x
    }
    setLastProbeTime(x: any /*Time*/) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
    }

    _message: any;
    get message(): any /*string*/ {
        return this._message
    }
    set message(x: any /*string*/) {
        this._message = x
    }
    setMessage(x: any /*string*/) {
        this.message = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface JobListHelper extends JobList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** JobList is a collection of jobs. */
export class JobListHelper extends ResourceTemplate implements JobListHelper {
    static kind = 'JobList';
    static apiVersion = 'batch/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, JobListHelper.kind, JobListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Job>*/ {
        return this._items
    }
    set items(x: any /*Array<Job>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Job>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface JobSpecHelper extends JobSpec {
    $activeDeadlineSeconds(x: any): any;
    $backoffLimit(x: any): any;
    $completionMode(x: any): any;
    $completions(x: any): any;
    $manualSelector(x: any): any;
    $parallelism(x: any): any;
    $selector(x: any): any;
    $suspend(x: any): any;
    $template(x: any): any;
    $ttlSecondsAfterFinished(x: any): any;
}

/** JobSpec describes how the job execution will look like. */
export class JobSpecHelper extends Template implements JobSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _activeDeadlineSeconds: any;
    get activeDeadlineSeconds(): any /*number*/ {
        return this._activeDeadlineSeconds
    }
    set activeDeadlineSeconds(x: any /*number*/) {
        this._activeDeadlineSeconds = x
    }
    setActiveDeadlineSeconds(x: any /*number*/) {
        this.activeDeadlineSeconds = x; return this
    }

    _backoffLimit: any;
    get backoffLimit(): any /*number*/ {
        return this._backoffLimit
    }
    set backoffLimit(x: any /*number*/) {
        this._backoffLimit = x
    }
    setBackoffLimit(x: any /*number*/) {
        this.backoffLimit = x; return this
    }

    _completionMode: any;
    get completionMode(): any /*string*/ {
        return this._completionMode
    }
    set completionMode(x: any /*string*/) {
        this._completionMode = x
    }
    setCompletionMode(x: any /*string*/) {
        this.completionMode = x; return this
    }

    _completions: any;
    get completions(): any /*number*/ {
        return this._completions
    }
    set completions(x: any /*number*/) {
        this._completions = x
    }
    setCompletions(x: any /*number*/) {
        this.completions = x; return this
    }

    _manualSelector: any;
    get manualSelector(): any /*boolean*/ {
        return this._manualSelector
    }
    set manualSelector(x: any /*boolean*/) {
        this._manualSelector = x
    }
    setManualSelector(x: any /*boolean*/) {
        this.manualSelector = x; return this
    }

    _parallelism: any;
    get parallelism(): any /*number*/ {
        return this._parallelism
    }
    set parallelism(x: any /*number*/) {
        this._parallelism = x
    }
    setParallelism(x: any /*number*/) {
        this.parallelism = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }

    _suspend: any;
    get suspend(): any /*boolean*/ {
        return this._suspend
    }
    set suspend(x: any /*boolean*/) {
        this._suspend = x
    }
    setSuspend(x: any /*boolean*/) {
        this.suspend = x; return this
    }

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }

    _ttlSecondsAfterFinished: any;
    get ttlSecondsAfterFinished(): any /*number*/ {
        return this._ttlSecondsAfterFinished
    }
    set ttlSecondsAfterFinished(x: any /*number*/) {
        this._ttlSecondsAfterFinished = x
    }
    setTtlSecondsAfterFinished(x: any /*number*/) {
        this.ttlSecondsAfterFinished = x; return this
    }
}

export interface JobStatusHelper extends JobStatus {
    $active(x: any): any;
    $completedIndexes(x: any): any;
    $completionTime(x: any): any;
    $conditions(x: any): any;
    $failed(x: any): any;
    $startTime(x: any): any;
    $succeeded(x: any): any;
}

/** JobStatus represents the current state of a Job. */
export class JobStatusHelper extends Template implements JobStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: any;
    get active(): any /*number*/ {
        return this._active
    }
    set active(x: any /*number*/) {
        this._active = x
    }
    setActive(x: any /*number*/) {
        this.active = x; return this
    }

    _completedIndexes: any;
    get completedIndexes(): any /*string*/ {
        return this._completedIndexes
    }
    set completedIndexes(x: any /*string*/) {
        this._completedIndexes = x
    }
    setCompletedIndexes(x: any /*string*/) {
        this.completedIndexes = x; return this
    }

    _completionTime: any;
    get completionTime(): any /*Time*/ {
        return this._completionTime
    }
    set completionTime(x: any /*Time*/) {
        this._completionTime = x
    }
    setCompletionTime(x: any /*Time*/) {
        this.completionTime = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<JobCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<JobCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<JobCondition>*/) {
        this.conditions = x; return this
    }

    _failed: any;
    get failed(): any /*number*/ {
        return this._failed
    }
    set failed(x: any /*number*/) {
        this._failed = x
    }
    setFailed(x: any /*number*/) {
        this.failed = x; return this
    }

    _startTime: any;
    get startTime(): any /*Time*/ {
        return this._startTime
    }
    set startTime(x: any /*Time*/) {
        this._startTime = x
    }
    setStartTime(x: any /*Time*/) {
        this.startTime = x; return this
    }

    _succeeded: any;
    get succeeded(): any /*number*/ {
        return this._succeeded
    }
    set succeeded(x: any /*number*/) {
        this._succeeded = x
    }
    setSucceeded(x: any /*number*/) {
        this.succeeded = x; return this
    }
}

export interface JobTemplateSpecHelper extends JobTemplateSpec {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** JobTemplateSpec describes the data a Job should have when created from a template */
export class JobTemplateSpecHelper extends Template implements JobTemplateSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metadata: any;
    get metadata(): any /*ObjectMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ObjectMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ObjectMetaHelper*/) {
        this.metadata = x; return this
    }

    _spec: any;
    get spec(): any /*JobSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*JobSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*JobSpecHelper*/) {
        this.spec = x; return this
    }
}
