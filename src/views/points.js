import sphere from '../assets/sphere2.png'
import * as THREE from 'three'
import {useLoader, useFrame} from "react-three-fiber";
import {useCallback, useMemo, useRef} from "react";

function Points() {

    const imgTexture = useLoader(THREE.TextureLoader, sphere)
    const bufferRef = useRef()
    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])
    //[(), (), ()...]} would be standard
    //[x1, y1, z1, x2, y2, z2...] is how we are going to pass in however
    const count = 100;
    const sep = 3;
    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2)
                let z = sep * (zi - count / 2)
                let y = graph(x, z);
                positions.push(x, y, z)
            }
        }
        return new Float32Array(positions)
    }, [count, sep, graph])

    useFrame(() => {
        t += 15
        const positions = bufferRef.current.array
        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2)
                let z = sep * (zi - count / 2)
                positions[i + 1] = graph(x, z)
                i += 3;
            }
        }
        bufferRef.current.needsUpdate = true
    })
    return (
        <points>
            <bufferGeometry attach='geometry'>
                <bufferAttribute
                    ref={bufferRef}
                    attachObject={['attributes', 'position']}
                    array={positions}
                    itemSize={3}
                    count={positions.length / 3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach='material'
                map={imgTexture}
                size={0.5}
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}

export default Points;