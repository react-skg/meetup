# React SKG Meetup
React.js Thessaloniki meetup wiki and resources

## Development

After clone the meetup project, your first order of business is to open terminal and run `npm install`

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

## Presenting

To present:

- Run `npm start`
- Open two browser windows on two different screens
- On your screen visit [http://localhost:3000/](http://localhost:3000/). You will be redirected to a URL containing the slide id.
- Add `presenter&` or `presenter&timer` immediately after the questionmark, e.g.: [http://localhost:3000/#/0?presenter](http://localhost:3000/#/0?presenter) or [http://localhost:3000/#/0?presenter&timer](http://localhost:3000/#/?presenter&timer&_k=wbyhif)
- On the presentation screen visit [http://localhost:3000/](http://localhost:3000/)
