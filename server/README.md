# Serveur d'emails pour Khalil Collection

Ce serveur gère l'envoi et la réception d'emails pour le formulaire de contact du site Khalil Collection.

## Configuration

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Installez les dépendances nécessaires :
   ```bash
   npm install express cors nodemailer body-parser dotenv axios concurrently
   ```

3. Configurez les variables d'environnement dans le fichier `.env` à la racine du projet :
   ```
   PORT=5000
   EMAIL_USER=votre_email@gmail.com
   EMAIL_PASS=votre_mot_de_passe_app
   EMAIL_RECIPIENT=destinataire@example.com
   ```

   **Note importante pour Gmail** : Vous devez utiliser un "mot de passe d'application" et non votre mot de passe habituel. Pour créer un mot de passe d'application :
   1. Allez dans les paramètres de votre compte Google
   2. Sécurité > Connexion à Google > Mots de passe des applications
   3. Créez un nouveau mot de passe d'application pour "Autre (nom personnalisé)"
   4. Utilisez ce mot de passe généré comme valeur pour `EMAIL_PASS`

## Démarrage du serveur

Pour démarrer uniquement le serveur d'emails :
```bash
npm run server
```

Pour démarrer le serveur d'emails et l'application React en même temps :
```bash
npm run dev
```

## Routes API

### GET /
- Description : Route de test pour vérifier que le serveur fonctionne
- Réponse : "Le serveur d'emails fonctionne correctement"

### POST /api/send-email
- Description : Envoie un email à partir du formulaire de contact
- Corps de la requête :
  ```json
  {
    "name": "Nom de l'expéditeur",
    "email": "email@example.com",
    "subject": "Sujet du message",
    "message": "Contenu du message"
  }
  ```
- Réponse en cas de succès :
  ```json
  {
    "success": true,
    "message": "Votre message a été envoyé avec succès"
  }
  ```
- Réponse en cas d'erreur :
  ```json
  {
    "success": false,
    "message": "Une erreur est survenue lors de l'envoi de votre message"
  }
  ```

## Intégration avec le frontend

Le formulaire de contact dans `src/pages/Contact.jsx` est configuré pour envoyer les données à l'API via Axios. Assurez-vous que l'URL de l'API est correcte (`http://localhost:5000/api/send-email` en développement).
