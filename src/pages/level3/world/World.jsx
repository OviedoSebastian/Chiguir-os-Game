import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";

export default function World(props) {

    const {nodes, materials} = useGLTF("/assets/models/world/Coliseo.glb");
    
    return (
      <RigidBody type="fixed" colliders="trimesh">
      <group dispose={null}>
      <group>
        <group>
          <mesh geometry={nodes.Graderias_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Graderias_2.geometry} material={materials.EscalerasMat} />
          <mesh geometry={nodes.Graderias_3.geometry} material={materials.MuroBajo} />
          <mesh geometry={nodes.Graderias_4.geometry} material={materials.BarandasMat} />
          <mesh geometry={nodes.Graderias_5.geometry} material={materials.Escaleritas2} />
          <mesh geometry={nodes.Graderias_6.geometry} material={materials.LogoUV} />
        </group>
        <group>
          <mesh geometry={nodes.Piso_1.geometry} material={materials.PisoLadrillos} />
          <mesh geometry={nodes.Piso_2.geometry} material={materials.TierraMat} />
        </group>
        <mesh geometry={nodes.PisoColiseo.geometry} material={materials.Cancha} />
        <group>
          <mesh geometry={nodes.Tarima_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Tarima_2.geometry} material={nodes.Tarima_2.material} />
          <mesh geometry={nodes.Tarima_3.geometry} material={materials.PinturaNegra} />
          <mesh geometry={nodes.Tarima_4.geometry} material={materials.TarimaColiseo} />
          <mesh geometry={nodes.Tarima_5.geometry} material={materials.MuroAfuera} />
        </group>
        <group>
          <mesh geometry={nodes.Estructura_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Estructura_2.geometry} material={materials.PinturaNegra} />
          <mesh geometry={nodes.Estructura_3.geometry} material={materials.PinturaAmarilla} />
          <mesh geometry={nodes.Estructura_4.geometry} material={materials.TechoColiseo} />
        </group>
        <mesh geometry={nodes.Arcos.geometry} material={materials.ArcosMat} />
        <mesh geometry={nodes.BarandasEscaleras.geometry} material={materials.BarandasMat} />
        <mesh geometry={nodes.Columnas.geometry} material={materials.PisoEscalerasAfuera} />
        <mesh
          geometry={nodes.Cercas.geometry}
          material={materials.Fence}
          position={[-50.63, 3.068, -30.53]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.021}
        />
        <mesh
          geometry={nodes.Cartel.geometry}
          material={materials.Carteles}
          position={[0.081, 1.135, -62.93]}
          scale={1.444}
        />
        <mesh
          geometry={nodes.Columna.geometry}
          material={materials.Columna}
          position={[0.081, 1.135, -62.93]}
          scale={1.444}
        />
        <group position={[0.081, 1.135, -62.93]} scale={1.444}>
          <mesh geometry={nodes.Lampara.geometry} material={materials.Lampara} />
          <mesh geometry={nodes.Lampara_1.geometry} material={materials.Luz} />
        </group>
        <mesh
          geometry={nodes.PuertaAbierta.geometry}
          material={materials.Fence}
          position={[-1.236, 1.137, -60.571]}
          rotation={[0, -1.082, 0]}
          scale={1.444}
        />
        <mesh
          geometry={nodes.PuertaCerrada.geometry}
          material={materials.Fence}
          position={[0.081, 1.135, -62.93]}
          scale={1.444}
        />
        <mesh
          geometry={nodes['1I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -64.97]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['2D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -64.97]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['3I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -70.013]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['4I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -70.013]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['5D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -75.028]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['6I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -75.028]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['7D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -80.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['8D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -80.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['9I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -82.479]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['1D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -64.97]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['2I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -64.97]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['3D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -70.013]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['4D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -70.013]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['5I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -75.028]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['6D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -75.028]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['7I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -80.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['8I'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -80.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes['9D'].geometry}
          material={materials['Material.006']}
          position={[1.236, 1.027, -82.479]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.769, 0.023, 0.769]}
        />
        <mesh
          geometry={nodes.Rieles.geometry}
          material={materials.MatRieles}
          position={[-0.294, 0.867, -74.678]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[11.028, 0.229, 0.027]}
        />
        <group position={[-2.736, 0.8, -104.647]} rotation={[0, Math.PI / 2, 0]} scale={0.674}>
          <mesh geometry={nodes.Paredes.geometry} material={materials['PinturaBlanca.001']} />
          <mesh geometry={nodes.Paredes_1.geometry} material={materials.Ventanas} />
          <mesh geometry={nodes.Paredes_2.geometry} material={materials.PinturaNegra} />
        </group>
        <mesh
          geometry={nodes.Techo.geometry}
          material={materials.Techo}
          position={[-2.736, 0.8, -104.647]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.674}
        />
        <group position={[-2.736, 0.8, -104.647]} rotation={[0, Math.PI / 2, 0]} scale={0.674}>
          <mesh geometry={nodes.Columna_1.geometry} material={materials['PinturaBlanca.001']} />
          <mesh geometry={nodes.Columna_2.geometry} material={materials.PinturaNegra} />
        </group>
        <group position={[-2.736, 0.8, -104.647]} rotation={[0, Math.PI / 2, 0]} scale={0.674}>
          <mesh geometry={nodes.Paredes001.geometry} material={materials.PisoCDU} />
          <mesh geometry={nodes.Paredes001_1.geometry} material={materials.TierraMat} />
        </group>
        <group
          position={[-4.73, 1.148, -98.326]}
          rotation={[0, 1.571, 0]}
          scale={[0.269, 0.249, 0.051]}>
          <group>
            <mesh geometry={nodes.Discos1.geometry} material={materials.GrisO} />
            <mesh geometry={nodes.Discos1_1.geometry} material={materials.GrisC} />
            <mesh geometry={nodes.Discos1_2.geometry} material={materials.GrisM} />
          </group>
        </group>
        <group
          position={[-4.594, 1.148, -97.31]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.269, 0.249, 0.051]}>
          <group>
            <mesh geometry={nodes.Discos2.geometry} material={materials.GrisO} />
            <mesh geometry={nodes.Discos2_1.geometry} material={materials.GrisC} />
            <mesh geometry={nodes.Discos2_2.geometry} material={materials.GrisM} />
          </group>
        </group>
        <mesh
          geometry={nodes.Banca4.geometry}
          material={materials.Banca}
          position={[-7.288, 0.905, -98.919]}
          scale={0.518}
        />
        <group
          position={[-3.239, 0, -108.282]}
          rotation={[-Math.PI, 0.029, -Math.PI]}
          scale={0.556}>
          <mesh
            geometry={nodes.Piernas1001.geometry}
            material={materials.Abductores}
            position={[-1.197, 1.364, -1.254]}
            rotation={[0.007, 0.044, -0.019]}
            scale={0.882}
          />
        </group>
        <group position={[0, 0, -111.312]} scale={0.541}>
          <mesh
            geometry={nodes.Barra1.geometry}
            material={materials.BarraO}
            position={[10.838, 1.599, 17.306]}
            rotation={[0, -1.571, 0]}
            scale={0.856}
          />
        </group>
        <mesh
          geometry={nodes.Maquina1.geometry}
          material={materials.Squat}
          position={[5.864, 0.865, -101.949]}
          rotation={[0, -1.571, 0]}
          scale={0.463}
        />
        <group position={[-0.256, 0.87, -102.006]} scale={0.438}>
          <mesh geometry={nodes.Bolas_1.geometry} material={materials.Bola1} />
          <mesh geometry={nodes.Bolas_2.geometry} material={materials.Bola2} />
        </group>
        <group
          position={[-2.661, 0.874, -111.429]}
          rotation={[-Math.PI, 0.031, -Math.PI]}
          scale={0.407}>
          <mesh geometry={nodes.Trotadora001.geometry} material={materials.Trotadora} />
        </group>
        <group position={[-0.539, 0.82, -102.673]} rotation={[0, -1.571, 0]} scale={0.65}>
          <mesh geometry={nodes.Set2.geometry} material={materials.Discos1} />
        </group>
        <group position={[-1.528, 0.832, -93.145]} rotation={[0, 1.571, 0]} scale={0.366}>
          <mesh geometry={nodes.Colchonetas001.geometry} material={materials.Colchonetas} />
        </group>
        <group
          position={[-12.689, 0.905, -98.762]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.429}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[0.142, 0, -8.289]}>
                <mesh geometry={nodes.Declinado.geometry} material={materials.Bancas} />
              </group>
              <group position={[0.475, 0, -2.186]}>
                <mesh geometry={nodes.Inclinado.geometry} material={materials.Bancas} />
              </group>
              <group position={[0.222, 0.081, 4.073]} scale={0.871}>
                <mesh geometry={nodes.Plano.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group position={[-9.097, 0.967, -83.075]} rotation={[-Math.PI / 2, 0, 0]} scale={0.474}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[-8.012, -0.084, -8.602]} scale={0.849}>
                <mesh geometry={nodes.SetBarras.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group
          position={[-14.828, 0.875, -87.604]}
          rotation={[-Math.PI / 2, 0, 1.553]}
          scale={0.508}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[6.692, 0, 8.733]}>
                <mesh geometry={nodes.Espalda002.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group
          position={[-8.296, 0.883, -114.955]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.674}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[-8.837, -0.133, 9.415]} scale={0.767}>
                <mesh geometry={nodes.LegDeclinado.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group
          position={[-4.083, 0.815, -87.161]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.774}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[-0.113, 0, 9.128]}>
                <mesh geometry={nodes.Banca001.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group position={[2.378, 1.326, -94.125]} rotation={[Math.PI / 2, 0.016, 0]} scale={1.189}>
          <mesh geometry={nodes.Eliptica_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <group position={[2.378, 1.326, -91.986]} rotation={[Math.PI / 2, 0.016, 0]} scale={1.189}>
          <mesh geometry={nodes.Eliptica001_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica001_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica001_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica001_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica001_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica001_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica001_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <group position={[2.378, 1.326, -90.105]} rotation={[Math.PI / 2, 0.016, 0]} scale={1.189}>
          <mesh geometry={nodes.Eliptica002_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica002_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica002_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica002_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica002_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica002_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica002_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <mesh
          geometry={nodes.SquatMachine.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -104.081]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <mesh
          geometry={nodes.Barra3.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -104.081]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <mesh
          geometry={nodes.Barra4.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -104.081]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <mesh
          geometry={nodes.SquatMachine001.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -106.587]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <mesh
          geometry={nodes.Barra3001.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -106.587]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <mesh
          geometry={nodes.Barra4001.geometry}
          material={materials['Squat.001']}
          position={[-16.71, 2.116, -106.587]}
          rotation={[0, -1.571, 0]}
          scale={1.261}
        />
        <group position={[-6.229, 0.877, -110.429]} scale={0.039}>
          <mesh geometry={nodes.Extencion_1.geometry} material={materials._Rack} />
          <mesh geometry={nodes.Extencion_2.geometry} material={materials._Tros} />
          <mesh geometry={nodes.Extencion_3.geometry} material={materials._Plastic} />
          <mesh geometry={nodes.Extencion_4.geometry} material={materials._Chrome} />
          <mesh geometry={nodes.Extencion_5.geometry} material={materials._Steel} />
          <mesh geometry={nodes.Extencion_6.geometry} material={materials._Iron} />
          <mesh geometry={nodes.Extencion_7.geometry} material={materials._Pillows_Blk} />
          <mesh geometry={nodes.Extencion_8.geometry} material={materials._Pillows_Wht} />
          <mesh geometry={nodes.Extencion_9.geometry} material={materials._Informer} />
          <mesh geometry={nodes.Extencion_10.geometry} material={materials._Plastic_Red} />
        </group>
        <mesh
          geometry={nodes.Bicicleta.geometry}
          material={materials.Bicicleta}
          position={[-4.124, 0.631, -86.82]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.021}
        />
        <group
          position={[-6.505, 0.815, -87.161]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.774}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <mesh
          geometry={nodes.Bicicleta001.geometry}
          material={materials.Bicicleta}
          position={[-6.546, 0.631, -86.82]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.021}
        />
        <group position={[54.248, -7.149, -147.953]} rotation={[0.016, 0.892, 0.019]}>
          <mesh geometry={nodes.Trofeo_1.geometry} material={materials['oro.001']} />
          <mesh geometry={nodes.Trofeo_2.geometry} material={materials['base.001']} />
          <mesh geometry={nodes.Trofeo_3.geometry} material={materials['estrella.001']} />
        </group>
        <group position={[-6.573, -6.866, 177.679]} scale={0.466}>
          <mesh geometry={nodes.Isla007.geometry} material={materials.Pasto} />
          <mesh geometry={nodes.Isla007_1.geometry} material={materials.TierraMat} />
        </group>
      </group>
    </group>
    </RigidBody>
    )
    
}

useGLTF.preload("/assets/models/world/Coliseo.glb");