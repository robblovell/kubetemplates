import { ResourceTemplate, Template } from "../resourceTemplate";
import { CronJob, CronJobList, CronJobSpec, CronJobStatus, JobTemplateSpec } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ObjectReference } from "../core/v1";
import { JobSpec } from "./v1";

export interface CronJobHelper extends CronJob {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate implements CronJobHelper {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1beta1';

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
    static apiVersion = 'batch/v1beta1';

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
