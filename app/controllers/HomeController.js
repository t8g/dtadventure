export default function HomeController (StepService) {

    // default sort values
    this.reverse = false
    this.predicate = 'name'

    StepService.getSteps()
    .then(function (steps) {
        this.steps = steps
    }.bind(this))

    this.sortBy = function (predicate) {
        this.reverse = !this.reverse
        this.predicate = predicate
    }

}
