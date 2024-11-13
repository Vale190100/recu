import { generateToken, comparePassword, hashPassword } from '../services/authServices.js';
import Usuario from '../database/usuarios.js';

const usuarioModel = new Usuario();

const login = async (req, res) => {
  const { correoElectronico, contrasenia } = req.body;

  try {
    const user = await usuarioModel.buscarPorCorreoElectronico(correoElectronico);
    if (!user) {
      return res.status(400).send({ mensaje: 'Usuario no encontrado' });
    }

    console.log("Hash ingresado:", hashPassword(contrasenia)); // hashPassword ahora está importado correctamente
    console.log("Hash almacenado:", user.contrasenia);

    const isPasswordValid = comparePassword(contrasenia, user.contrasenia);
    if (!isPasswordValid) {
      return res.status(400).send({ mensaje: 'Contraseña incorrecta' });
    }

    const token = generateToken(user);
    res.json({ token });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensaje: 'Error en el servidor' });
  }
};

export { login };