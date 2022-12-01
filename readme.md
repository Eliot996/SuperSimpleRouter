# Super Simple Router

This is a simple and easy to use router

But it can only handle which functions, to run, given a url

Can handle a default function, for handling those pesky urls, with no route

## Params are now posible!
All you need to do is add a "{}" to the path, for a standard param, that return whatever is in that stop. Or you can add an regex expression, directly into the path. But remember if you are using regex, and you want the output, put it into a capture group.

Example with both, a standard param and regex capture group:<br>
`/params/([0-9]+)/{2}`