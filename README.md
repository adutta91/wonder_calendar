
# Wonder Calendar
Simple CRUD browser calendar app

## Setup
The app requires the npm installer, which is included in the node.js download.

To run, download and save files, navigate to the 'wonder_calendar' folder in the
terminal and run `npm install`

Then open `index.html` using any web browser

## Features
The app allows you to create events, view/edit them, or delete them

#### Create
Click on any day to open the Create Event form. On the form, enter the necessary
data (title of event, start and end times, and description). When finished,
click "Create" - the form will close and the event will appear on the appropriate
day.

#### View/Edit
Click on an event to view its details. A form similar to the Create Event form
will appear. In here you can edit the information, then click "Edit" when
finished to save the changes.

#### Delete
Alternatively, on the Edit Event form, you can choose to delete the event by
clicking the "Delete" button

### Navigation
You can navigate to different months using the arrows above the calendar.
Clicking on today's date (at the very top) will return you to the present month.

### Persistence of information
The app has no backend, but data is stored locally on the browser's localStorage,
so any events created will be remembered the next time you open the app.

## Todo

* allow for more precise time-windows (eg. custom or 15 minute intervals)
* provide a more reliable and easier to use form for creating an event
* provide more view options, such as week or day view
* enable drag'n'drop functionality of events to edit times
* more customization
  * multiple 'calendars', such that events can be organized into groups
  * different colors for events
  * repeating events
  * share events with others via email
