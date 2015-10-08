export default function EditStepController ($routeParams, StepService, $location) {

    StepService.getStep($routeParams.id)
    .then(function (step) {
        this.step = step
    }.bind(this))

    this.save = function () {
        if (this.stepForm.$invalid) {
            alert('Erreur') // @todo : améliorer ça
            return
        }
        StepService.saveStep(this.step)
        .then(function () {
            $location.path('/')
        })
    }

}
