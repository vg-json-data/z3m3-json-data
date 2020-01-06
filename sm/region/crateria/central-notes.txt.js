// Central Crateria
/*

[
  { "op": "replace",  "path": "$..rooms[?(@.name=='Parlor and Alcatraz')]..nodes[?(@.name=='Bottom Right Door')].nodeSubType", "value": "blue" },
  { "op": "remove",   "path": "$..rooms[?(@.name=='Parlor and Alcatraz')]..nodes[?(@.name=='Bottom Right Door')].locks" },
  { "op": "add",      "path": "$..rooms[?(@.name=='Parlor and Alcatraz')]..nodes[?(@.name=='Bottom Right Door')].note", "value": "Z3M3: Door is changed to Blue." }
]

*/
