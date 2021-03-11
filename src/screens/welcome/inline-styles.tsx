const gray = '#929497';
const pureBlack = '#000000';
const blue = '#0853DC';

const helvetica = 'HelveticaNeue';
const helveticaBold = "HeltevicaNeueBold";

const inlineStyles = () => (
  <style jsx>{`
  ._description {
    background-color: #ffffff;
    width: 50%;
    height: 50%;
    font-family: ${helvetica};
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: ${pureBlack};
  }

  ._descriptionText {
    padding: 20% 0 10% 15%;
    background-color: #ffffff;
  }

  ._target {
    font-family: ${helvetica};
    width: 50%;
    background-color: #ffffff;
    font-size: 1rem;
  }

  ._targetRightContainer {
    display: flex;
    justify-content: space-between;
    width: 50%;
    background-color: #ffffff;	
  }

  ._targetRight {
    font-family: ${helvetica};
    color: $gray;
    background-color: #ffffff;
  }

  ._targetRight:first-child {
    padding-left: 15%;
  }

  ._contact {
    width: 50%;
    display: flex;
    align-items: flex-end;
  }

  ._contactText {
    font-family: ${helvetica};
    font-size: 14px;
    margin-right: 15%;
    background-color: #ffffff;

  }

  ._contactText::after {
    display: block;
    content: '';
    border-bottom: solid 1px ${pureBlack};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  ._contactText:hover::after {
    transform: scaleX(1);
  }

  ._moreInfo {
    opacity: 0;
    position: absolute;
    bottom: 15%;
    color: ${gray};
    width: 30%;
    background-color: #ffffff;
    font-family: ${helvetica};
  }

  ._arrow {
    position: absolute;
    bottom: 5%;
    right: 50%;
    z-index: 2;
  }
  
  ._whiteBodyText{
    color: ${pureBlack};
    font-family: ${helveticaBold};
    font-weight: bold;
    line-height: 1.2;
    opacity: 1;
    font-size: 5rem;
    background-color: #ffffff;
  }

  ._concept {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 40%;
    background-color: #ffffff;
  }

  ._separator {
    width: 100%;
    border: 0;
    background-color: ${gray};
    height: 3px;
  }

  ._intermediate {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.4%;
    z-index: 2;
    position: absolute;
    bottom: 50%;
    width: 95%;
  }

  ._languageButton {
    font-family: ${helvetica};
    font-size: 12px;
    background-color: ${pureBlack};
    color: #ffffff;
    border: none;
    width: 70px;
    margin-right: 50px;
    padding: 5px 0 3px 0;
    border-radius: 2px;
    cursor: none;
    font-weight: 200;
  }

  ._smallBodyText {
		opacity: 0;
		font-size: 1.75rem;
		z-index: 2;
    font-family: ${helveticaBold};
    line-height: 1.2;
    font-weight: 900;
    color: ${blue};
    padding-bottom: 0.625rem;
	}
  
`}</style>
)

export default inlineStyles;