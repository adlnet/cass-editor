<template>
    <tr>
        <th>
            <b>{{ url }}</b>
        </th>
        <td>
            <span
                v-if="isCurated"
                class="icon has-text-primary">
                <i class="fa fa-check" />
            </span>
        </td>
        <td>
            <div class="field">
                <div class="control is-size-3">
                    <input
                        v-model="isPluginEnabled"
                        :id="id + 'pluginEnabledSwitch'"
                        type="checkbox"
                        :name="id + 'pluginEnabledSwitch'"
                        class="switch is-outlined">
                    <label :for="id + 'pluginEnabledSwitch'" />
                </div>
            </div>
        </td>
        <td>
            <div
                v-if="isOwned"
                title="Manage plugin"
                class="button is-outlined is-small is-primary"
                @click="$emit('show-details', id)">
                <span class="icon">
                    <i class="fas fa-cog" />
                </span>
            </div>
            <div
                v-if="isOwned"
                title="Delete plugin"
                class="button is-outlined is-small is-danger delete-btn"
                @click="$emit('show-delete', id)">
                <span class="icon">
                    <i class="fas fa-trash" />
                </span>
            </div>
            <div
                v-if="!isOwned"
                title="View plugin"
                class="button is-outlined is-small is-primary"
                @click="$emit('show-details', id)">
                <span class="icon">
                    <i class="fas fa-eye" />
                </span>
            </div>
        </td>
    </tr>
</template>

<script>
import {pluginUtil} from '../../mixins/pluginUtil';
export default {
    name: 'PluginListItem',
    mixins: [pluginUtil],
    props: {
        id: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        isCurated: {
            type: Boolean,
            default: false
        },
        isOwned: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isPluginEnabled: {
            get() {
                return this.getIsPluginEnabled(this.id);
            },
            set(val) {
                if (val) {
                    this.$emit('enable-plugin', this.id);
                } else {
                    this.$emit('disable-plugin', this.id);
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
    .delete-btn {
        margin-left: .4rem;
    }
</style>