###
ShareCoffee.Search (c) 2014 Thorsten Hans
| dotnet-rocks.com | https://github.com/ThorstenHans/ShareCoffee.Search/ | under MIT License |
###

root = global ? window

if not root.ShareCoffee? or not root.ShareCoffee.REST?
	throw new Error("LoadError")

root.ShareCoffee.MySearch = {}