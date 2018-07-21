# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Project Steps To Completion + Listing of Tests

1. I Edited the `allFeeds` variable in **./js/app.js** by changing the array to an empty array, which caused an error in Jasmine and stated "Rss Feeds are not defined".

2. I then removed the empty array to return the `allFeeds` variable to a passing state.

3. Next, I wrote a loop that loops through the `allFeeds` object and ensures that it (stated in Jasmine as 'have url defined and not empty') has a URL defined and that the URL is not empty. This passes when a URL is listed and is not blank or non-existant.

4. I Wrote a test that loops through each feed in the `allFeeds` object and ensures it (stated in Jasmine as 'have names and not empty') has a name defined and that the name is not empty. This test ensures that each feed URL has a title/headline and is not listing as the URL itself or is not showing up empty.

5. Wrote a new test suite named `"The menu"` which is for the expandable hamburger style menu.

6. I Wrote a test that ensures the menu element is hidden by default. This test passes if it (stated in Jasmine as 'is hidden by default') sees that the body class "menu-hidden" states as true, which is the default state.

7. Next, I Wrote a test that ensures the menu changes visibility when the menu icon is clicked. It (stated in Jasmine as 'displays or hides menu-list on clicking') begins with the initial test that when the menu is clicked, it triggers the "menu-hidden" class to be false and opens the menu.

If the menu is currently open, clicking the menu sees the "menu-hidden" class revert to 'true' which is the default state. When both these elements are functioning correctly, the test passes.

8. I Wrote a new test suite named `"Initial Entries"`.

9. Wr0te a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container. it (stated in Jasmine as 'has atleast one ".entry" element') passes if there is at least one entry loaded into the feed.

10. Wrote a new test suite named `"New Feed Selection"`.

11. Finally I wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes. It (stated in Jasmine as 'content actually changes, when new feed is loaded') looks to see that the feed does not equal newfeed so that the content is not simply looping the same items, but is actually changing.

# How to Run

1. Download or clone the git repository to your computer.
2. Open the index.html file in an internet browser.
3. Look at the Jasmine console to see the tests and results.