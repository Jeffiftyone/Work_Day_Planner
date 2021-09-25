# 05 Third-Party APIs: Work Day Scheduler
This application is a work day scheduler, built using moment.js, bootstrap, and jQuery.

The application displays the current date in the header section.
There are 9 1-hour timeblocks showing the hours from 9am-5pm. These timeblocks were built using the predefined classes and bootstrap grid layout.

The 'checkTime' function goes through an array of the timeblocks to compare whether the timeblock has passed or not.
    If the timeblock has passed, it will be given the 'past' class and show up as grey
    If the timeblock is current, it will be given the 'present' class and show up as red
    If the timeblock has not passed, it will be given the 'future' class and show up as green
This function is called on start up.

The 'plans' function is called on page start up, setting the text within the corresponding timeblock to the corresponding value in the local storage. This function is called on start up.

The user may type within the text area of the timeblock. If the user clicks the save button, the planner will store the text to a corresponding variable in the Local Storage, represented by the array of timeblocks.

Link to Repository: https://github.com/Jeffiftyone/Work_Day_Planner
Link to Page: https://jeffiftyone.github.io/Work_Day_Planner/
ScreenShot: ./WorkScheduler.PNG

