# NgIdleTimeout

Idle timeout service for Angular >= 2. Observable wrapper around native JavaScript. Default timeout is 20 minutes, but can be overriden.

## Usage
To use this service, import it at the root module of your app (usually app.module.ts) and in your root component (usually app.component.ts) subscribe to the observer, like so:
```
import { TimeoutService } from '/path/to/timeout.service';
@Component({})

export class AppComponent {
  constructor(private timeoutService: TimeoutService) {
    this.timeoutService.setIdleTime(300000); // call this method if you want to override default 20 minute timeout
    this.timeoutService.handleInactivity()
      .subscribe(inactive => {
        // some action here
      });
  }
}
```
Of course, you can import it in an individual component as well, but this loads the service at the root and is recommended.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

