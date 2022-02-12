import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CronJob, CronJobSpec, CronJobStatus, JobTemplateSpec } from "./v1beta1";
import { ObjectReference } from "../core/v1";
import { JobSpec } from "./v1";

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1beta1';

    metadata(metadata: ObjectMeta): CronJobHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CronJobSpec): CronJobHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: CronJobStatus): CronJobHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobHelper.kind
        this._template.apiVersion = CronJobHelper.apiVersion
    }
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate {
    static kind = 'CronJobList';
    static apiVersion = 'batch/v1beta1';

    items(items: Array<CronJob>): CronJobListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CronJobListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobListHelper.kind
        this._template.apiVersion = CronJobListHelper.apiVersion
    }
}

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export class CronJobSpecHelper extends ResourceTemplate {
    static kind = 'CronJobSpec';
    static apiVersion = 'batch/v1beta1';

    concurrencyPolicy(concurrencyPolicy: string): CronJobSpecHelper {
        this._template.concurrencyPolicy = concurrencyPolicy
        return this
    }

    failedJobsHistoryLimit(failedJobsHistoryLimit: number): CronJobSpecHelper {
        this._template.failedJobsHistoryLimit = failedJobsHistoryLimit
        return this
    }

    jobTemplate(jobTemplate: JobTemplateSpec): CronJobSpecHelper {
        if (!this._template.jobTemplate) this._template.jobTemplate = []
        this._template.jobTemplate = {
            ...this._template.jobTemplate,
            ...jobTemplate
        }
        return this
    }

    schedule(schedule: string): CronJobSpecHelper {
        this._template.schedule = schedule
        return this
    }

    startingDeadlineSeconds(startingDeadlineSeconds: number): CronJobSpecHelper {
        this._template.startingDeadlineSeconds = startingDeadlineSeconds
        return this
    }

    successfulJobsHistoryLimit(successfulJobsHistoryLimit: number): CronJobSpecHelper {
        this._template.successfulJobsHistoryLimit = successfulJobsHistoryLimit
        return this
    }

    suspend(suspend: boolean): CronJobSpecHelper {
        this._template.suspend = suspend
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobSpecHelper.kind
        this._template.apiVersion = CronJobSpecHelper.apiVersion
    }
}

/** CronJobStatus represents the current state of a cron job. */
export class CronJobStatusHelper extends ResourceTemplate {
    static kind = 'CronJobStatus';
    static apiVersion = 'batch/v1beta1';

    active(active: Array<ObjectReference>): CronJobStatusHelper {
        if (!Array.isArray(active)) { active = [active] }
        if (!this._template.active) this._template.active = active
        this._template.active = [...this._template.active, ...active]
        return this
    }

    lastScheduleTime(lastScheduleTime: Time): CronJobStatusHelper {
        this._template.lastScheduleTime = lastScheduleTime
        return this
    }

    lastSuccessfulTime(lastSuccessfulTime: Time): CronJobStatusHelper {
        this._template.lastSuccessfulTime = lastSuccessfulTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobStatusHelper.kind
        this._template.apiVersion = CronJobStatusHelper.apiVersion
    }
}

/** JobTemplateSpec describes the data a Job should have when created from a template */
export class JobTemplateSpecHelper extends ResourceTemplate {
    static kind = 'JobTemplateSpec';
    static apiVersion = 'batch/v1beta1';

    metadata(metadata: ObjectMeta): JobTemplateSpecHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: JobSpec): JobTemplateSpecHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobTemplateSpecHelper.kind
        this._template.apiVersion = JobTemplateSpecHelper.apiVersion
    }
}
