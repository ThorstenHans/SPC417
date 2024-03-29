﻿<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Language="C#" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming runat="server" />
<html>
<head>
  <title>vCard</title>
  <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
  <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
  <script type="text/javascript" src="/_layouts/15/sp.js"></script>
  
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular-sanitize.js"></script>

  <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

  <script type="text/javascript" src="../Scripts/ShareCoffee/ShareCoffee.min.js"></script>
  <script type="text/javascript" src="../Scripts/ShareCoffee.UserProfiles/ShareCoffee.UserProfiles.min.js"></script>

  <script type="text/javascript" src="../Scripts/vCardApp.js"></script>
  <script type="text/javascript" src="../Scripts/vCardService.js"></script>
  <script type="text/javascript" src="../Scripts/vCardController.js"></script>
</head>
<body>

  <div data-ng-app="vCardApp">
    <div data-ng-controller="vCardController">
      <div class="vcard">
        <div class="vcard-name">
          <div class="bump margin">{{name}}</div>
          <span>{{job}}</span>
          <div class="margin" ng-show="name != ''">Experts Inside</div>
          <div ng-bind-html="info" class="margin"></div>
          
           <div>{{phone}}</div>
          <div>{{mail}}</div>
        </div>
        <div class="vcard-pic">
          <img ng-src="{{profilePicture}}" /></div>
        <div class="clear-fix"></div>
 
      </div>
    </div>
  </div>
</body>

</html>
