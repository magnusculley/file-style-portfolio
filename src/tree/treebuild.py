from pathlib import Path

path=Path("my-parcel-app/testing")

for entry in path.rglob("*"):
    if entry.is_file():
        print("F" + str(entry.relative_to(path)))
    else:
        print("D" + str(entry.relative_to(path)))
