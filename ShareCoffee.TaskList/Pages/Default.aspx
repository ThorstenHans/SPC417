<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/ShareCoffee/ShareCoffee.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
    <script type="text/javascript" src="../Scripts/ShareCoffee.TaskList.js"></script>
    <script type="text/javascript" src="../Scripts/ShareCoffee.TaskList.Services.js"></script>
    <script type="text/javascript" src="../Scripts/ShareCoffee.TaskList.Controllers.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    ShareCoffee TaskList
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div data-ng-app="ShareCoffeeTaskListApp">
        <div class="profile" data-ng-controller="profileController">
     
          <div>
            <img ng-src="{{userPicture}}" />
          </div>
          <div>
             <span>{{userName}}</span>
          </div>
           
        </div> 
        <div data-ng-controller="taskListController">
          
          <div class="new-task">
            <input type="text" data-ng-model="newTask" data-ng-focus="newTask = ''" />
            <button type="button" data-ng-click="addTask()">Create Task</button>
          </div>
          <div class="task" ng-repeat="task in tasks | orderBy:'Status':reverse">
            <i ng-click="toggle(task)" data-ng-class="{'fa fa-2 fa-square-o': task.Status == 'Not Started', 'fa fa-2 fa-check-square-o': task.Status == 'Completed'}"></i>
            <span ng-class="{done: task.Status == 'Completed'}">{{task.Title}}</span>
            
          </div>
        </div>
    </div>

</asp:Content>
