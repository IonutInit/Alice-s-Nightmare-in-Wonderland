# Alice's Nightmare in Wonderland

---

A digitization of the gamebook by [Jonathan Green](http://jonathangreenauthor.blogspot.com/) and published by [Snowbooks Ltd](https://www.snowbooks.com/books/alices-nightmare-in-wonderland/), with original illustrations by Kev Crossley. This is only a sample containing the first steps of the game, but enough to encompass the bluk of the game logic. All rights to the content belong to the author and the publisher.

![book cover](/src/assets/cover.jpg)

### Chapters in this sample

![chapters in this sample](/src/assets/readme/chapters.jpg)

### App DOM Structure

![dom structure](/src/assets/readme/dom_structure.jpg)

### Content Template

*Only "chapter_number" and next_chapter_number are not optional.*

```
    "chapter_number": {
        "content": "text",
        "options": [
            [next_chapter_number, "chapter text"],
            [next_chapter_number, "chapter text"]
        ],
        "event": [
            {
               "name": "attribute_to_change",
               "change": value_of_change 
            },
            {
               "name": "attribute_to_change",
               "change": value_of_change 
            }
        ],
	"enemy": ["name", initiative, combat, endurance, ?number]
    },
```
