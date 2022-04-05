import { ClusterRoleHelper } from '@c6o/kubetempletes-resources/rbac/v1-helper'
import { PolicyRule } from '@c6o/kubetempletes-resources/rbac/v1'
import { Rule } from './objects'

class ClusterRole extends ClusterRoleHelper {

    constructor(name, rules: Rule[] = []) {
        super(name, null)
        return this.$rules(rules)
    }

    $rules(rules) {
        if (!this._rules) this._rules = []
        this._rules = [
            ...this._rules,
            ...rules.map(rule => rule.template)
        ]
        return this
    }
    get rules(): Array<PolicyRule> {
        return this._rules
    }
    set rules(x: Array<PolicyRule>) {
        this._rules = this.set(this.rules, x)
    }
    // $rules(x: Array<PolicyRule>) {
    //     this.rules = x; return this
    // }
}

module.exports = { ClusterRole }