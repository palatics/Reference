<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UCExample.aspx.cs" Inherits="UsingWebControls.UCExample" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            This is some text
            <br/>
            <asp:PlaceHolder ID="HeaderPlaceHolder" runat="server"></asp:PlaceHolder>
            This is some other text
        </div>
    </form>
</body>
</html>
