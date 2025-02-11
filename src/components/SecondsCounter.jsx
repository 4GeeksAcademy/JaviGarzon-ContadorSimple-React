import React from 'react';

const SecondsCounter = ({ seconds }) => {

    const styles = {
        counter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            backgroundColor: "black",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            fontFamily: "monospace",
        },

        icon: {
            marginRight: "10px",
        },
        digits: {
            fontWeight: "bold",
        },

    };

    return (
        <>
            <div style={styles.counter}>
                <>
                    <i class="fa-regular fa-clock" style={styles.icon}></i>
                    <span style={styles.digits}>{seconds.toString().padStart(6, "0")}</span>
                </>

            </div>
        </>
    );


};
export default SecondsCounter;