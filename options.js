$(window).load(function(){
    var bg = chrome.extension.getBackgroundPage();
    if(bg)
    {
        $("#jiraBaseUrl").val(bg.getJiraBaseUrl())
        $('#jiraBaseUrl').live("keypress", function(e) {if (e.keyCode == 13) {save()}})
        $('#note').click(function(e){$("#jiraBaseUrl").val("https://jira.atlassian.com")})  
    }

    $("#jiraBaseUrlSaveButton").click(function() {
        var bg = chrome.extension.getBackgroundPage();
        bg.saveOptions($("#jiraBaseUrl").val())
    });
    
});



