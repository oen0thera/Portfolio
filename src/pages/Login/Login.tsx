import Button from '@/components/Button/Button'
import styles from './Login.module.scss'
import { ButtonSize, ButtonType } from '@/types/components/Button.type'
export default function Login(){
    return <div className={styles.login}>
                <div>
                    <div className={styles.login_title}>SSB
                        {/* <div className={styles.title_shadow}></div> */}
                        
                        
                    </div>
                    
                    <div className={styles.input_wrapper}>
                        
                        <div className={styles.input_container}>
                            <h2>로그인</h2>
                            <section className={styles.input}>
                                <input placeholder={'ID'}></input>

                                <input placeholder={'Password'} type={'password'}></input>
                                <Button size={ButtonSize.LARGE} content={"로그인"} onClick={()=>{}}/>
                            </section>
                            <hr/>

                            <section className={styles.social_logins}>
                                <Button size={ButtonSize.LARGE} content={"구글 로그인"} type={ButtonType.GOOGLE} onClick={()=>{}}/>
                                <Button size={ButtonSize.LARGE} content={"카카오 로그인"} type={ButtonType.KAKAO} onClick={()=>{}}/>
                                <Button size={ButtonSize.LARGE} content={"네이버 로그인"} type={ButtonType.NAVER} onClick={()=>{}}/>

                            </section>
                            <section className={styles.help}>
                                <a>ID 찾기</a>
                                |
                                <a>비밀번호 찾기</a>
                                |
                                <a>회원가입</a>    

                            </section>    
                        </div>
                        <div className={styles.container_shadow}></div>
                    </div>
                </div>
            </div>
}