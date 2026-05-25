# Front Despacho

## Configuración

Crea un archivo `.env` a partir de `.env.example` y define las URLs de backend para ventas y despachos:

```env
VITE_VENTAS_API_URL=https://tu-backend-ventas.com
VITE_DESPACHOS_API_URL=https://tu-backend-despachos.com
```

Luego instala dependencias y levanta el proyecto:

```bash
npm install
npm run dev
``` 

## Despliegue con GitHub Actions

El workflow `.github/workflows/deploy.yml`:

1. construye la imagen Docker;
2. la etiqueta como `latest`;
3. la sube a Amazon ECR;
4. se conecta al EC2 por SSH con `appleboy/ssh-action`;
5. descarga la nueva imagen y reemplaza el contenedor en ejecución.

### Variables del repositorio

Configura estas **Variables** en GitHub:

```text
AWS_REGION=us-east-1
ECR_REPO_URL=<account-id>.dkr.ecr.us-east-1.amazonaws.com/front-despacho
VITE_VENTAS_API_URL=https://tu-backend-ventas.com
VITE_DESPACHOS_API_URL=https://tu-backend-despachos.com
```

### Secretos del repositorio

Configura estos **Secrets** en GitHub:

```text
AWS_ROLE_TO_ASSUME=arn:aws:iam::<account-id>:role/<github-actions-role>
EC2_PUBLIC_IP=<ip-publica-del-ec2>
EC2_SSH_KEY=<llave privada SSH>
```

### Requisitos en AWS

- El repositorio ECR debe existir.
- El rol usado por GitHub Actions debe poder publicar imágenes en ECR.
- El EC2 debe tener Docker y AWS CLI instalados.
- El EC2 debe tener un rol de instancia con permisos para hacer pull desde ECR.
- El security group del EC2 debe permitir el puerto que definas en `APP_HOST_PORT`. 
 
