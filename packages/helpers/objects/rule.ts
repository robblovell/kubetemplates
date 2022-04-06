import { ResourceRuleHelper } from '@rel/kubetemplate-resources/authorization/v1-helper'

export class Rule extends ResourceRuleHelper {
    constructor(resources = [], verbs = ['get', 'watch', 'list'], apiGroups = ['']) {
        super({
            apiGroups,
            resources,
            verbs,
        })
        return this
    }
}
