Feature: Google
 
    I want to use google search
        Scenario: Searching query
            Given I open Google page
            Then I see "google.pl" url

            When I put "lol" into search input
            Then I see "10" results searched
            And first result title is "League of Legends"

            When I switch to videos tab
            Then I see "10" results shown
    
        Scenario: Searching query with commands
            Given I search query "cypress io"
            Then I see "12" results shown


