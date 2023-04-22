import { MainLayout } from "../../components/global/MainLayout";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import { LoginThunk } from "../../store/User/userActions";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { wrapper } from "../../store/redux-store";

const Auth = ({ loginHandler }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.User.user)
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        dispatch(LoginThunk(data))
    }

    useEffect(() => {
        if (user.id) {
            router.push('/')
        }
    }, [user])

    return (
        <div className="auth">
            <div className="auth__logo">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={320}
                    height={70}
                />
            </div>
            <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                <input className="auth__form__field" placeholder="Email" {...register("email", { required: true })} />
                <input className="auth__form__field" type="password" placeholder="Password" {...register("password", { required: true })} />
                <input className="auth__form__button" type="submit" />
            </form>
        </div>
    )
}

// export const getServerSideProps = wrapper.getServerSideProps(({ getState, dispatch }) =>
//     async () => {

//         return {
//             props: {
//                 loginHandler: AuthCallBack
//             }
//         }
//     }
// )

export default Auth