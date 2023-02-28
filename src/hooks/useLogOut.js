function useLogOut() {
    sessionStorage.removeItem("user")
    window.location.reload();
    console.log('dasda');
    return null;

}

export default useLogOut;