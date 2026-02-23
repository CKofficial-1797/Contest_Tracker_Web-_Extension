# Track the Contests

A lightweight browser extension that aggregates and displays competitive
programming contests from multiple platforms in real time.

------------------------------------------------------------------------

## Overview

Contest Tracker Pro helps programmers stay updated with upcoming and
ongoing contests by collecting data from major platforms and presenting
it in a clean popup interface. All contest information is fetched
dynamically and organized for quick access.

Supported platforms: - LeetCode - Codeforces - CodeChef - AtCoder -
HackerEarth - HackerRank - Kick Start

------------------------------------------------------------------------

## Features

### Core Functionality

-   Multi-platform contest tracking
-   Real-time updates via Kontests API
-   Platform-based filtering
-   Live local clock
-   Dark mode with saved preference

### Contest Details Displayed

-   Contest name
-   Platform name
-   Start and end time (local timezone)
-   Duration
-   Time remaining
-   Direct contest link

------------------------------------------------------------------------

## Tech Stack

-   HTML5
-   CSS3
-   JavaScript (ES6+)
-   Moment.js
-   Chrome Extension Manifest V3
-   Kontests API

------------------------------------------------------------------------

## Installation

### Load from Source

1.  Clone the repository
2.  Run: npm install
3.  Open your browser:
    -   Chrome: chrome://extensions/
    -   Edge: edge://extensions/
4.  Enable Developer Mode
5.  Click Load unpacked
6.  Select the project folder

------------------------------------------------------------------------

------------------------------------------------------------------------

## API

Endpoints:
- /leet_code 
- /codeforces
- /code_chef
- /at_coder
- /hacker_earth
- /hacker_rank
- /kick_start

------------------------------------------------------------------------

## Permissions

-   storage -- Save theme preference
-   host_permissions -- Access contest API

------------------------------------------------------------------------

## Browser Support

-   Chrome 88+
-   Edge 88+
-   Opera 74+
-   Brave 1.20+

------------------------------------------------------------------------



