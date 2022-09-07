---
sidebar_position : 3
title : "Organisation de l'arborescence"
---

## Création de l'URL

## Organisation de la sidebar


### \_category\_.js
### Méta-data dans une page Markdown
En en-tête d'une page Markdown on peut ajouter une boîte de code entre ```---```. Cette boîte de code sera lue par Docusaurus et permettra de modifier des éléments environnant la page.

* ```title``` permet de définir le titre de la page. C'est ce titre qui apparaitra dans la sidebar, et qui apparaitra comme titre de niveau 1 dans l'affichage de la page sur le Wiki. Par défaut, le titre de la page est donné par le titre de niveau 1 écrit en Markdown. Pour éviter des soucis d'affichage, dans le cas où on utilise la balise ```title```, il est préférable de n'utiliser aucun titre de niveau 1 dans la page (ces derniers étant mals reconnus par Docusaurus).

* ```sidebar_position``` permet de définir la, au sein d'un dossier possédant plusieurs pages Markdown, l'ordre dans lequel elles doivent apparaitrent dans la sidebar.

Pour cette page, la méta-data se fait comme suit :

```Markdown
---
sidebar_position : 3
title : "Organisation de l'arborescence"
---
```
