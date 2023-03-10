import json

with open("reload_config.json") as configfile:
	config = json.loads(configfile.read())

with open(config["replay"]) as replayfile:
	replay = json.loads(replayfile.read())

player_int = config["team"]
player_string = "player_{}".format(player_int)
i = 0

while True:
	input()
	if "actions" in replay:
		output = replay["actions"][i][player_string];
		i += 1
	else:
		i += 1		# Note: actions are out by 1 on Kaggle, so do this first.
		output = replay["steps"][i][player_int]["action"]
	print(json.dumps(output))
