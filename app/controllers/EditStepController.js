export default function EditStepController ($routeParams, StepService) {

    StepService.getStep($routeParams.id)
    .then(function (step) {
        this.step = step
    }.bind(this))

}
