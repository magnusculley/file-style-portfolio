from pathlib import Path
import json

path=Path("my-parcel-app/root")
filesystem=[]
for entry in path.rglob("*"):
    if entry.is_file():
        print("F" + str(entry.relative_to(entry.parent)))
        filesystem.append("F" + str(entry.relative_to(entry.parent)) + "/" + str(entry.parent.relative_to(path)))
    else:
        print("D" + str(entry.relative_to(entry.parent)))
        filesystem.append("D" + str(entry.relative_to(entry.parent)) + "/" + str(entry.parent.relative_to(path)))

with open("my-parcel-app/src/tree/tree.json", "w") as f:
    json.dump(filesystem, f)
    print (json.dumps(filesystem))