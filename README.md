# React App project

For the project I have used the Typescript template of Create React App (see available scripts bellow).

I have added only three libraries: mapboxgl as requested for the map, dayjs for date formatting and a small missing dependency from the Create React App package for the jest tests to run. Dayjs is a nice alternative to moment.js, only 666kb and very easy to use. I have not added any CSS preprocessors or libraries, even though in a bigger project I'd prefer to use Styled components or at least SCSS, but for something like this the "real" CSS is definitely enough. I have not used any global state management or data fetching libraries, as it was not needed for this project. I think the user experience, error handling, caching and loading could be improved by adding Tansact ReactQuery, but it felt smooth enough without it.

For unit switching I have created a reusable Switch component, stateless and quite standard for optimal reusing. For user convenience the chosen unit type is saved in local storage and retrieved on initial loading.

I have added a few small Jest test to check if the application is rendered and weather data fetched. With a bit of extra time adding more tests would be one of the first improvement I would make.

The search functionality is very straight forward and was easy to integrate. I am initializing the map after loading and on every unit switch. I believe this part could be improved as well, avoiding the extra rerender, but the updated unit state had to be passed to the weather data fetching. I am displaying the current weather data for a clicked location on a popup. It was hard to choose which data to display as most of it seemed important, so I decided to display most of it. Instead of showing only the name for the location region, I am fetching full address separately. Thought that might make it a bit more interesting for the user.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
