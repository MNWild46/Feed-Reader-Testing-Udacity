/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project.
         */
        /* When allFeeds is turned into a empty array, 
        * the test throws one failure that 
        * "Rss Feeds are not defined*/
        it('variable is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */
        it('have url defined and not empty', function() {
            for(var i=0; i < allFeeds.length; i++){
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++){
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
          });
      });


    /* New test suite named "The menu" */
    describe('The menu', function() {


        /* Test ensures menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

         /* Test ensures the menu changes
          * visibility when the menu icon is clicked. Test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('displays or hides menu-list on clicking', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
  
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
      });

    /* New test suite named "Initial Entries" */
    describe("Initial Entries", function(){

        /* loadFeed() is asynchronous so this test will 
        * require the use of Jasmine's beforeEach 
        * and asynchronous done() function..
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        /* This test ensures that, when the loadFeed function is 
        * called and it's work is completed,
        * there is at least one single .entry element within the .feed container.
        */
        it('has atleast one ".entry" element', function(){
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feed;
        let newfeed;
    
    /* loadFeed() is asynchronous so this test 
    * will require the use of beforeEach 
    * and asynchronous done() function.
    */
        beforeEach(function(done) {
            loadFeed(0, function() {
              feed = $('body').html();
              loadFeed(1, function(){
                   newfeed = $('body').html();
                   done();
              });
           });
         });

    /* Test ensures when new feed is loaded by loadfeed(), content actually changes
    * and does not stay the same.
    */
         it('content actually changes, when new feed is loaded', function() {
            expect(feed).not.toEqual(newfeed);
         });
      });
  }());
