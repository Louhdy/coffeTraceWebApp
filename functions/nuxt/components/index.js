export const PageSubtitle = () => import('../..\\components\\PageSubtitle.vue' /* webpackChunkName: "components/page-subtitle" */).then(c => wrapFunctional(c.default || c))
export const PageTitle = () => import('../..\\components\\PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c))
export const DataTableOptionButton = () => import('../..\\components\\dataTable\\OptionButton.vue' /* webpackChunkName: "components/data-table-option-button" */).then(c => wrapFunctional(c.default || c))
export const DataTableSearchTable = () => import('../..\\components\\dataTable\\SearchTable.vue' /* webpackChunkName: "components/data-table-search-table" */).then(c => wrapFunctional(c.default || c))
export const Lot = () => import('../..\\components\\lot\\index.vue' /* webpackChunkName: "components/lot" */).then(c => wrapFunctional(c.default || c))
export const Physical = () => import('../..\\components\\physical\\index.vue' /* webpackChunkName: "components/physical" */).then(c => wrapFunctional(c.default || c))
export const PhysicalNewPhysical = () => import('../..\\components\\physical\\NewPhysical.vue' /* webpackChunkName: "components/physical-new-physical" */).then(c => wrapFunctional(c.default || c))
export const ReceptionDetails = () => import('../..\\components\\reception\\Details.vue' /* webpackChunkName: "components/reception-details" */).then(c => wrapFunctional(c.default || c))
export const Reception = () => import('../..\\components\\reception\\index.vue' /* webpackChunkName: "components/reception" */).then(c => wrapFunctional(c.default || c))
export const ReceptionNewReception = () => import('../..\\components\\reception\\NewReception.vue' /* webpackChunkName: "components/reception-new-reception" */).then(c => wrapFunctional(c.default || c))
export const RegisterConfirmationModal = () => import('../..\\components\\register\\ConfirmationModal.vue' /* webpackChunkName: "components/register-confirmation-modal" */).then(c => wrapFunctional(c.default || c))
export const RegisterConfirmButtons = () => import('../..\\components\\register\\ConfirmButtons.vue' /* webpackChunkName: "components/register-confirm-buttons" */).then(c => wrapFunctional(c.default || c))
export const SearchBox = () => import('../..\\components\\search\\SearchBox.vue' /* webpackChunkName: "components/search-box" */).then(c => wrapFunctional(c.default || c))
export const Sensorial = () => import('../..\\components\\sensorial\\index.vue' /* webpackChunkName: "components/sensorial" */).then(c => wrapFunctional(c.default || c))
export const SensorialNewSensorial = () => import('../..\\components\\sensorial\\NewSensorial.vue' /* webpackChunkName: "components/sensorial-new-sensorial" */).then(c => wrapFunctional(c.default || c))
export const Traceability = () => import('../..\\components\\traceability\\index.vue' /* webpackChunkName: "components/traceability" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhase = () => import('../..\\components\\traceability\\Phase.vue' /* webpackChunkName: "components/traceability-phase" */).then(c => wrapFunctional(c.default || c))
export const UtilsLineLoader = () => import('../..\\components\\utils\\LineLoader.vue' /* webpackChunkName: "components/utils-line-loader" */).then(c => wrapFunctional(c.default || c))
export const RegisterFieldsLoadingModal = () => import('../..\\components\\register\\fields\\LoadingModal.vue' /* webpackChunkName: "components/register-fields-loading-modal" */).then(c => wrapFunctional(c.default || c))
export const RegisterFieldValidation = () => import('../..\\components\\register\\fields\\RegisterFieldValidation.vue' /* webpackChunkName: "components/register-field-validation" */).then(c => wrapFunctional(c.default || c))
export const RegisterFieldsSelectField = () => import('../..\\components\\register\\fields\\SelectField.vue' /* webpackChunkName: "components/register-fields-select-field" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhasesDistribution = () => import('../..\\components\\traceability\\phases\\Distribution.vue' /* webpackChunkName: "components/traceability-phases-distribution" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhasesPacking = () => import('../..\\components\\traceability\\phases\\Packing.vue' /* webpackChunkName: "components/traceability-phases-packing" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhasesPhysical = () => import('../..\\components\\traceability\\phases\\Physical.vue' /* webpackChunkName: "components/traceability-phases-physical" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhasesSensorial = () => import('../..\\components\\traceability\\phases\\Sensorial.vue' /* webpackChunkName: "components/traceability-phases-sensorial" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityPhasesToast = () => import('../..\\components\\traceability\\phases\\Toast.vue' /* webpackChunkName: "components/traceability-phases-toast" */).then(c => wrapFunctional(c.default || c))
export const TraceabilityUtilsPending = () => import('../..\\components\\traceability\\utils\\Pending.vue' /* webpackChunkName: "components/traceability-utils-pending" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
