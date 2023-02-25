INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "Start",
        "offsetY": 50,
        "annotations": [
          {
            "content": "Start"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "Terminator"
        }
      }', 50, 50);

INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "Init",
        "offsetY": 100,
        "annotations": [
          {
            "content": "Init"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "Process"
        }
      }', 50, 50);
INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "Condition",
        "offsetY": 250,
        "annotations": [
          {
            "content": "i < 10?"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "Decision"
        }
      }', 50, 50);
INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "Print",
        "offsetY": 350,
        "offsetX": 420,
        "annotations": [
          {
            "content": "Print( Looping diagram )"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "PreDefinedProcess"
        }
      }', 50, 50);
INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "Increment",
        "offsetY": 450,
        "offsetX": 400,
        "annotations": [
          {
            "content": "i++;"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "Process"
        }
      }', 50, 50);NewEmpty
INSERT INTO nodes(nodebody, "offsetX", "offsetY")
	VALUES ( '{
        "id": "End",
        "offsetY": 550,
        "annotations": [
          {
            "content": "End"
          }
        ],
        "shape": {
          "type": "Flow",
          "shape": "Terminator"
        }
      }', 50, 50);

-- add connector data       
INSERT INTO connectors(connectorbody, sourcenode, targetnode)
	VALUES ('{
        "id": "connector1",
        "sourceID": "Start",
        "targetID": "Init"
      }', 101, 102);
INSERT INTO connectors(connectorbody, sourcenode, targetnode)
	VALUES ('{
        "id": "connector2",
        "sourceID": "Start",
        "targetID": "Init"
      }', 101, 102);
INSERT INTO connectors(connectorbody, sourcenode, targetnode)
	VALUES ('{
        "id": "connector3",
        "sourceID": "Start",
        "targetID": "Init"
      }', 101, 102);      