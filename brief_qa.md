# Brief de Projet - À fournir à l'équipe testeuse

**Nom de votre équipe :** équipe de Michael, Érick, Manel, Mégane  
**Nom du projet :** L'avanture de Stickman  
**Type de projet :** Trace ton chemin 
**Date :** 3 décembre 2024

---

## 🔗 Accès au projet

**URL du site déployé :**

- lien vers GitHub: [Github](https://erickouellette1105.github.io/webapp-creative-erick-michael-manel-megane/)


## 🔗 Accès à votre Trello pour l'ajout de fiches de bogues

[Trello](https://trello.com/invite/b/68e6945ead50829f333c7da0/ATTIf52b7b1ee558a67653ecbf117635e4fcF0AD835A/projet-web-tracer-votre-chemin)

---

## 📖 Description du projet

### Concept général

L'aventure de Stickman est une histoire interaction dans un monde inspirer de D&D où le joueur incarne le personnage de Stickman et doit faire des décisions pour aidé sont frère prisonnier d'un grand méchant, Selon les objets dans l'inventaire (total de 8 fin)

---

## ✅ Fonctionnalités implémentées (DONC À TESTER)

### PRIORITÉ HAUTE (fonctionnalités principales)

- [ ] Lecture de [20] chapitres
- [ ] Système de choix fonctionnel
- [ ] [2] branches narratives
- [ ] [8] fins différentes accessibles
- [ ] Tracking de [inventaire/flags]
- [ ] Historique des décisions (à la fin)

### PRIORITÉ MOYENNE

- [ ] Responsive (mobile, tablette, desktop)
- [ ] les statistiques affiche l'historique


### PRIORITÉ BASSE (bonus si temps)

- [ ] les objets sont cliquable dans l'inventaire pour voir une description

---

## ❌ Fonctionnalités NON implémentées

**Important : Ne PAS reporter ces éléments comme bugs**

S'il y a des choses qui n'ont pas été faites dans votre projet et qui ne sont donc à ne pas tester, veuillez les lister ici pour laisser savoir à vos testeurs plutôt que de les faires chercher pour rien.

Par exemple:

- ❌ [Sauvegarde LocalStorage (optionnelle - pas faite)]
- ❌ [Animations GSAP (optionnelles - pas faites)]
- ❌ [Mode sombre]
- ❌ [ajout de sons]

---

## 🧪 Cas de test suggérés

Suggérez au testeurs de tester des cas précis dans votre appli. Listez-les cas ici.

### Test 1 : test de l'inventaire

**Objectif :** Vérifier que l'inventaire fonctionne

**Étapes :**

1. aquérir un objet
2. ouvrir l'inventaire
3. cliqué sur l'objet

**Résultat attendu :**
lorsqu'un objet est choisis il devrait être dans l'inventaire et il est cliquable pour pouvoir voir une description en bas de page
---

### Test 2 : menu statistique

**Objectif :** Vérifier de les statistiques marche bien

**Étapes :**

1. se rendre à une fin du jeu
2. ouvrir le menu de statistique

**Résultat attendu :**
on devrait pouvoir voir l'historique des choix fait avec les chapitre, les choix et les objets si vous en avez

---

### Test 3 : Responsive mobile

**Objectif :** Vérifier que le site fonctionne sur mobile

**Étapes :**

1. Ouvrir DevTools (F12)
2. Activer le mode device (icône téléphone/tablette)
3. Sélectionner "iPhone SE" ou 375px
4. Tester les fonctionnalités principales

**Résultat attendu :**

- Tout s'affiche correctement (pas de débordement)
- Navigation fonctionne
- Boutons sont assez grands pour être cliqués

---

## 🐛 Problèmes connus (Ne PAS les reporter)

**Ces problèmes sont déjà identifiés et documentés :**

- [le UI est pas pleinement responsive]
- [le coffre est coupé lorsqu'on le hover]
- [pas encore corrigé les faute d'orthographe]
- [le retour à l'acceuil ne refresh pas l'invenaire et l'historique]

---

## 🎯 Zones à tester en priorité

**Nous aimerions que vous testiez particulièrement :**

1. [le système d'inventaire (si les objets choisis apparait dans l'inventaire et s'il débloque une nouvelle option dans l'histoire)]
2. [La version mobile (nous l'avons peu testée)]
3. [vérifier qu'il n'y à pas de dead end dans l'histoire]

---

## 📱 Appareils et navigateurs testés par nous

**Ce que nous avons déjà testé :**

- ✅ Chrome (Desktop)
- ⚠️ Mobile (via DevTools uniquement, pas sur vrai téléphone)
- ❌ Firefox (Desktop)
- ❌ Safari (pas d'accès)
- ❌ Tablette réelle

**Ce que vous pourriez tester en plus :**

- Safari (si vous avez un Mac/iPhone)
- Sur vos vrais téléphones
- Sur vraie tablette

---

## 🗺️ Structure du projet (Pour "Trace ton chemin")

**Arbre narratif simplifié :**

![brainstorm](./img/brainstorm.png)

**Liste des fins accessibles :**

1. [fin plume du phoenix] - Condition : [aquérir le grimoire de feux]
2. [fin mage des ombres] - Condition : [aquérir la magie des ombre]
3. [Fin du visionneur passifique] - Condition : [aquérir le sort ??? et l'utiliser deux fois de suite]
4. [Bonne fin] - Condition : [aquérir l’épée suprême du maître goblin]
5. [fin du bouffon] - Condition : [aquérir l'épée crayon et l'armure papier]
6. [fin Boom] - Condition : [aquérir la dynamite]
7. [Mauvaise fin] - Condition : [utiliser l'attaque de bras de stickman]
8. [Ouch!] - Condition : [se faire manger par une mimique]

---

## 📞 Contact

**Pour questions urgentes ou clarifications :**

- Teams : Ouellette, Érick ou Un Dupré, Michael

**Disponibilité :**

- Un peu n'importe quand
- Possibilité de meeting rapide (15-20 min) si nécessaire

---
